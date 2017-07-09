<template>
  <div class="detail">
 	<p>hello !</p>
      <p>歌名:{{song.song_name}}</p>
      <p>歌手:{{song.singer}}</p>
  </div>
</template>

<script>
     export default {
      data() {
          return {
            song: {}
          }
        },
      created() {
          console.log("---------detail");
          this._getSong();
       },
       methods:{
           _getSong(){
            console.log("获取歌曲详细");
            let id = this.$route.params.songId;
            this.$http.get(`/api/song/${id}`)
            .then(res => {
              console.dir(res.data)
              this.song = res.data
            })
            .catch(err => {
              console.log(err)
            })
          }
       }
    };
</script>

<style lang="less" scoped>
      .detail {
        text-align: center;
        padding-top: 30px;
        font-size: 18px;
      }
</style>
