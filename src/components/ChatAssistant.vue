<template>
    <v-app>
        <v-container fluid class="p-0" style="height: 100vh;">
            <v-row class="m-0" style="height: 100%;">
                <!--<v-col cols="12">
                    <h2 class="title">#ChatAssistant</h2>
                </v-col>-->
                <v-col cols="12" class="chat-container">
                    <div class="chat-messages" ref="chatMessages">
                        <div v-for="(message, index) in messages" :key="index"
                            :class="{ 'message-me': message.sender === 'me', 'message-other': message.sender !== 'me' }">
                            <div class="message-content"
                                :class="{ 'message-me-content': message.sender === 'me', 'message-other-content': message.sender !== 'me' }">
                                {{ message.content }}</div>
                        </div>
                    </div>
                    <div class="input-container">
                        <v-btn @click="toggleInputMode" class="mode-switch-btn">
                            <v-icon v-if="inputMode === 'text'">mdi-microphone</v-icon>
                            <v-icon v-else>mdi-keyboard</v-icon>
                        </v-btn>
                        <v-text-field v-model="newMessage" placeholder="输入消息" outlined solo-inverted
                            v-if="inputMode === 'text'" @input="onInput" @blur="onBlur"
                            class="plain-text-field"></v-text-field>
                        <v-btn v-if="inputMode === 'text'" @click="sendMessage" class="send-btn">
                            <v-icon>mdi-airplane</v-icon>
                        </v-btn>
                        <v-btn v-else @touchstart="startRecording" @touchend="stopRecording" class="record-btn">
                            <v-icon>mdi-microphone</v-icon> 按住说话
                            <div class="recording-indicator" v-show="showRecordingIndicator">
                                <div>{{ Math.floor(recordingTime / 60) }}:{{ (recordingTime % 60 < 10 ? '0' : '') +
                            recordingTime % 60 }}</div>
                                        <div style="margin-top: 10px;">正在录音</div>
                                </div>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ChatAssistant',

    data() {
        return {
            messages: [
                { sender: 'other', content: '你好，有什么需要帮助的吗？' }
            ],
            newMessage: '',
            inputMode: 'text',
        };
    },
    methods: {
        mounted() {

        },
        async sendMessage() {
            if (this.newMessage.trim() !== '') {
                try {
                    this.messages.push({ sender: 'me', content: this.newMessage });
                    const response = await axios.post('https://api.soulter.top/cccc2024/text',
                        {
                            "input_text": this.newMessage,
                            "extra_prompt": "",
                            "stream": true,
                            "session_id": "123"
                        }
                    );
                    const responseData = response.data;
                    this.messages.push({ sender: 'other', content: responseData });

                    window.Android.speakText(responseData);
                } catch (error) {
                    this.messages.push({ sender: 'other', content: error });
                    console.error(error);
                }
                this.newMessage = '';
                //this.messages.push({ sender: 'other', content: '是的' });
                this.scrollToBottom();
            }
        },
        async startRecording() {
            try {
                this.showRecordingIndicator = true;
                this.recordingTime = 0; // 初始化录音时长

                window.Android.speechBegin();

                this.recordingInterval = setInterval(() => {
                    this.recordingTime++; // 每秒录音时长加1
                }, 1000);
            } catch (error) {
                this.messages.push({ sender: 'other', content: error });
                console.error(error);
            }

        },
        async stopRecording() {
            try {
                clearInterval(this.recordingInterval);
                this.showRecordingIndicator = false;
                window.Android.speechEnd();
                while(!window.Android.confirmSpeechResult());
                var audio_b64 = window.Android.getSpeechResult();
                //var audio_b64 = window.Android.fetchSpeechResultBase64();
                this.newMessage = audio_b64;
                this.sendMessage();
            } catch (error) {
                this.messages.push({ sender: 'other', content: error });
                console.error(error);
            }
        },
        toggleInputMode() {
            this.inputMode = this.inputMode === 'text' ? 'voice' : 'text';
        },
        onInput() {
            // Handle input changes
        },
        onBlur() {
            // Handle input blur
        },
        scrollToBottom() {
            this.$nextTick(() => {
                this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
            });
        }
    }
};
</script>

<style>
.v-container {
    padding: 0;
}

.chat-container {
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #f6d365, #fda085);
    border-radius: 10px;
    overflow: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

/* 隐藏滚动条 */
.chat-messages::-webkit-scrollbar {
    display: none;
}

.input-container {
    display: flex;
    align-items: center;
    padding: 10px;
}

.plain-text-field {
    font-family: 'Arial', sans-serif;
    border: none;
    background-color: #7aef8b;
    box-shadow: none;
    height: 50px;
    margin: 0 10px;
}

.send-btn {
    max-width: 70px;
    min-width: 70px;
    border-radius: 0;
    font-weight: bold;
    font-size: 16px;
    background-color: #6c5ce7;
    color: #fff;
}

.record-btn {
    position: relative;
    flex: 1;
    background-color: #ff6b6b;
    color: #fff;
    border-radius: 0;
}

.message-content {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    word-break: break-all;
}

.message-me-content {
    display: flex;
    background-color: #6c5ce7;
    color: #fff;
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
}

.message-other-content {
    display: flex;
    background-color: #f8f9fa;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
}

.message-me {
    align-self: flex-end;
}

.message-other {
    align-self: flex-start;
}

.mode-switch-btn {
    margin-right: 10px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    background-color: #6c5ce7;
    color: #fff;
}

.recording-indicator {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: auto;
}

.record-btn {
    position: relative;
    touch-action: manipulation;
}
</style>
