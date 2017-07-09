<template>
  <div class="list">
  	<div class="title">我最喜欢的歌曲</div>
 	<table class="song-table">
 		<thead>
 			<th>歌曲</th>
 			<th>歌手</th>
 			<th>操作</th>
 		</thead>
 		<tbody>
 			<!-- <tr>
 				<td>夜曲</td>
 				<td>周杰伦</td>
 				<td>
 					<button type="button" class="btn btn-info">查看</button>
 					<button type="button" class="btn btn-info">修改</button>
 					<button type="button" class="btn btn-danger">删除</button>
 				</td>
 			</tr> -->

 			<tr v-for="song of songs">
 				<td>{{song.song_name}}</td>
 				<td>{{song.singer}}</td>
 				<td>
 					<button type="button" class="btn btn-info" @click="showDetail(song)">查看</button>
 					<button type="button" class="btn btn-info" @click="edit(song)">修改</button>
 					<button type="button" class="btn btn-danger" @click="deleteSong(song)">删除</button>
 				</td>
 			</tr>
 		</tbody>
 	</table>

 	<div class="add-sign">
 		<span class='glyphicon glyphicon-plus-sign' @click="addSong()"></span>
 	</div>

 	 <!-- 添加歌曲模态框 -->
 	 <div class="bg-layer" v-show="showModal"></div>
 	 <div class="add-modal"  v-show="showModal">
 	 	<div class="modal-title">添加歌曲</div>
 	 	<form class="form-group form-horizontal song-form" role="form">
			<div class="form-group">
			    <label class="col-xs-3 col-md-3 control-label">歌曲名:</label>
			    <div class="col-xs-7 col-md-7">
			      <input class="form-control" type="text" placeholder="歌曲名" maxlength="20" v-model="song.song_name">
			    </div>
			    <span class="col-xs-1 col-md-1 require">*</span>
			</div>

			<div class="form-group">
			    <label class="col-xs-3 col-md-3 control-label">歌手:</label>
			    <div class="col-xs-7 col-md-7">
			      <input class="form-control" type="text" placeholder="歌手" maxlength="4" v-model="song.singer">
			    </div>
			</div>
	  	</form>

	  	<div class="opt">
	  		<button type="button" class="btn btn-default float-left" @click="closeModal()">取消</button>
	  		<button type="button" class="btn btn-success float-right" @click="sureAdd()">确定</button>
	  	</div>

 	 </div>
  </div>
</template>

<script type="text/ecmascript-6">
     export default {
      data() {
          return {
          	song:{},
          	songs: [],
          	showModal: false
          }
        },
      created() {
          console.log("---------create");
          this._getSongs();
       },
      methods: {
      	addSong(){
      		this.showModal = true;
      	},
      	closeModal(){
      		this.showModal = false;
      		this.song = {};
      	},
      	sureAdd(){
    		  this.$http.post('/api/addSong', {
	          song_name: this.song.song_name,
	          singer: this.song.singer
	        })
	        .then(res => {
	          console.log('添加歌曲成功');
	          this.song  = {};
	          this.showModal = false;
	          this._getSongs();
	        })
	        .catch(e => {
	          console.log('保存失败');
	          console.log(e)
	        })
      	},
          showDetail(song){
          	let songId = song._id;
          	alert(songId);
          	this.$router.push(`/api/movie/${songId}`)
          },
          edit(song){

          },
          deleteSong(song){
          	let songId = song._id;
          	alert(songId);
	      this.$http.delete(`/api/movie/${songId}`)
	        .then(res => {
	          console.log(res.data)
	          this._getSongs();
	        }).catch(e => console.log(e))
          },
          _getSongs(){
          	console.log("获取歌曲列表");
          	this.$http.get('/api/songList')
	        .then(res => {
	          console.dir(res.data)
	          this.songs = res.data
	        })
	        .catch(err => {
	          console.log(err)
	        })
          }
      }  
    };
</script>

<style lang="less" scoped>
	.list {
		padding: 30px 0;
		.title {
			text-align: center;
			font-size: 20px;
		}

		.song-table {
			width: 100%;
			margin-top:20px;
			thead,tr{
				display: flex;
			}
		
			th,td{
				text-align: center;
				flex: 1;
				line-height: 50px;
			}

			th {
				border-bottom: 1px solid #e5e5e5;
			}

			td {
				border-bottom: 1px solid #66caf1;
			}
		}

		.add-sign {
			margin-top: 40px;
			text-align: center;
			font-size: 40px;
			color: #66caf1;
			span {
				cursor: pointer;
			}
		}

		.bg-layer {
		  position: fixed;
		  top: 0;
		  left: 0;
		  width: 100%;
		  height: 100%;
		  background: rgba(0,0,0,.5);
		  z-index: 10;
		}
		
		.add-modal {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			z-index: 1000;
			background: #fff;
			border-radius: 3px;
			width: 400px;
			height: 250px;
			overflow: hidden;

			.modal-title {
				width: 100%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 18px;
				font-weight: bold;
				border-bottom: 1px dashed #66caf1;
			}

			.song-form {
				margin-top: 20px;
				.require {
					color: red;
					text-align: left;
					line-height: 34px;
					padding:0;
					vertical-align: middle;
					font-size: 22px;
				}
			}

			.opt {
				text-align: center;
				margin-top: 40px;
				padding: 0 80px;
				button {
					padding-left: 26px;
					padding-right: 26px;
				}
			}

			.float-left {
				float: left;
			}

			.float-right {
				float: right;
			}
		}


	}
</style>
