import vue from "vue";
import vuex from "vuex";
import logger from "vuex/dist/logger";
import Fabulous from './module/Fabulous'
vue.use(vuex);

export default new vuex.Store({
    modules:{
      Fabulous
    },
    plugins:[logger()]
})