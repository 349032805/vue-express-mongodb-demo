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
 			<tr>
 				<td>夜曲</td>
 				<td>周杰伦</td>
 				<td>
 					<button type="button" class="btn btn-info">查看</button>
 					<button type="button" class="btn btn-info">修改</button>
 					<button type="button" class="btn btn-danger">删除</button>
 				</td>
 			</tr>
 			
 		</tbody>
 	</table>

 	<div class="add-sign">
 		<span class='glyphicon glyphicon-plus-sign'></span>
 	</div>
  </div>
</template>

<script type="text/ecmascript-6">
     export default {
      data() {
          return {
          }
        },
      created() {
          console.log("---------create");
       },
      methods: {
          
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
	}
</style>
