<template>
  <div>
    <div>------------------------</div>
    <div>{{info}}</div>
    <div>1.yarn dev or npm run dev</div>
    <div>2.Open the dev.html in the browser</div>
    <div>have fun!!!</div>
    <div>------------------------</div>
    <div></div>
    <div></div>
    <div>-----------run-------------</div>
    <!--日志显示-->
    <div>
      {{log}}
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
    logger.info("test1");
    logger.setOutput(content => {
      this.log = content;
    });
    logger.info("test2");
    logger.info("test3");
  }
}
</script>