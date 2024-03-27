<template>
  <v-container>
    <div class="card-title-warn">
                        <div class="title" style="font-size: 13px;">
                            <span>
                                <svg t="1695436459025" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="9276" width="20" height="20">
                                    <path
                                        d="M512 0c282.752 0 512 229.248 512 512S794.752 1024 512 1024 0 794.752 0 512 229.248 0 512 0z"
                                        fill="#32ABD1" p-id="9277"></path>
                                    <path
                                        d="M276.544 672.6016a33.536 33.536 0 0 1-14.976-27.904v-257.024h-48.64c-12.928 0-23.424 10.496-23.424 23.424v304.64c0 12.928 10.496 23.424 23.424 23.424h163.968l-100.352-66.56z"
                                        fill="#CCEBF4" p-id="9278"></path>
                                    <path
                                        d="M443.456 756.0576l-145.28-96.512c-9.344-6.144-14.976-16.64-14.976-27.904v-335.872a33.4848 33.4848 0 0 1 52.096-27.904l104.96 69.632a123.7248 123.7248 0 0 1 55.296 103.04v287.488c0 18.56-14.976 33.536-33.536 33.536-6.656 0.128-13.056-1.92-18.56-5.504"
                                        fill="#FFFFFF" p-id="9279"></path>
                                    <path
                                        d="M747.584 672.6016a33.536 33.536 0 0 0 14.976-27.904v-257.024h48.64c12.928 0 23.424 10.496 23.424 23.424v304.64c0 12.928-10.496 23.424-23.424 23.424h-163.968l100.352-66.56z"
                                        fill="#CCEBF4" p-id="9280"></path>
                                    <path
                                        d="M580.8 756.0576l145.28-96.512c9.344-6.144 14.976-16.64 14.976-27.904v-335.872a33.4848 33.4848 0 0 0-52.096-27.904l-104.96 69.632a123.7248 123.7248 0 0 0-55.296 103.04v287.488c0 18.56 14.976 33.536 33.536 33.536 6.528 0.128 13.056-1.92 18.56-5.504"
                                        fill="#FFFFFF" p-id="9281"></path>
                                </svg>
                            </span>
                            <p class="title-text">
                                下一节课
                            </p>
                            <p class="percent">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"
                                    height="20" width="20">
                                    <path
                                        d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                    </path>
                                </svg> 今天 15:20，逸夫楼507
                            </p>
                        </div>
                        <div class="data">
                            <p>
                                计算机组成原理
                            </p>

                            <div class="range">
                                <div class="fill">
                                </div>
                            </div>
                        </div>
                    </div>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>

<style>


.card-title-warn {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 90%;
  border-radius: 20px;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  position: relative;
  padding: 0.5rem;
  background-color: #10B981;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
}

.title span svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  height: 1rem;
}

.title-text {
  margin-left: 0.5rem;
  color: #374151;
  font-size: 18px;
}

.percent {
  margin-left: 0.5rem;
  color: #02972f;
  font-weight: 600;
  display: flex;
}


.data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.data p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1F2937;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.data .range {
  position: relative;
  background-color: #E5E7EB;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.data .range .fill {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #10B981;
  width: 76%;
  height: 100%;
  border-radius: 0.25rem;
}
</style>