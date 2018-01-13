<template>
  <div>
    <div>------------------------</div>
    <div>{{info}}</div>
    <div>1.yarn dev or npm run dev</div>
    <div>2.open the dev.html in the browser</div>
    <div>have fun!!!</div>
    <div>------------------------</div>
    <div></div>
    <div></div>
    <div>-----------run-------------</div>
    <!--日志显示-->
    <div>
      <span v-html="log"></span>
    </div>
    <div>-----------END run-------------</div>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import logger from "../src/logger";

@Component({
  components: {}
})
export default class Index extends Vue {
  info = "Hello world!!";
  log = "1111";

  created() {
    logger.add("no start<br/>");

    logger.start(content => {
      this.log = content;
    });
    logger.add("start1<br/>");
    logger.add("start2<br/>");

    let content = logger.content;
    logger.add("logger content:" + JSON.stringify(content));

    logger.stop();
    logger.add("stop1<br/>");
    logger.add("stop2<br/>");

    logger.start(content => {
      this.log = content;
    });
    logger.add("restart1<br/>");
    logger.add("restart2<br/>");
  }
}
</script>