<template>
	<div>
	  <div class="hello">
	    {{msg}}
	  </div>
	  <div id="test_d3"></div>
  	</div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld.vue',
      tempData :[99, 71, 78, 25, 36, 92],
    }
  },
  mounted(){
  	let t = document.getElementById('test_d3');
  	console.log(t,'ttt');
  	this.renderD3(t,this.tempData);
  },
	methods:{
		renderD3(dom,data){
			//1 获取DOM 设置宽高
			let canvas = d3.select(dom).append('svg');
				canvas.attr('width', 500)
					.attr('height', 270)
					.attr('radius', Math.min(500,270)/2);
			let colors = [];
		}
	}

}
</script>

<style scoped>
  
</style>
