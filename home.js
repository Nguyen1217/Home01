//icon-action component
Vue.component('icon-action',{
	template:`
	<div>
		<div class="col-md-4" v-for = "subcontent in content">
			<div class="icon-container">
				<img :src = "'assets/img/' + subcontent.icon + '.png'">
				<div class="content-wrapper">
					<h3>{{subcontent.name}}</h3>
					<p>{{subcontent.title}}</p>
				
				</div>
			</div>
		</div>
		
	</div>
	`,
	data: function(){
		return{
			content:[
				{name:"Ask", title:"Create your account within minutes", icon:"ask"},
				{name:"Solve problem", title:"Create your account within minutes", icon:"ask"},
				{name:"Connect", title:"Create your account within minutes", icon:"ask"}
			]
		}
	}
})
new Vue({
el:'#js-home-section-2',
})





//Top questions component
	//parent component(tabs)
	Vue.component('tab_top',{
		props:['alldata1'],
		template: `
		<div class="subtab">
		<ul class="item-list">
			<li v-for="subobj in alldata1" style = "width:100%;">
				<post :item="subobj"></post>
			</li>
		</ul>
	</div>`,
		data: function () {
			return{}
			}
	});

	Vue.component('tab_english',{
		props:['alldata2'],
		template: `
		<div class="subtab">
			<ul class="item-list">
				<li v-for="subobj in alldata2" style = "width:100%;">
					<post :item="subobj"></post>
				</li>
			</ul>
		</div>`,
		data: function () {
			return{}
			},
	});

	Vue.component('tab_technology',{
		props:['alldata3'],
		template: `               
		<div class="subtab">
			<ul class="item-list">
				<li v-for="subobj in alldata3" style = "width:100%;">
					<post :item="subobj"></post>
				</li>
			</ul>
		</div>`,
		data: function () {
			return{}
			},
	});
	// child component(post)
	Vue.component('post', {
		template: "#post",
		props: ['item'],
	});

// Popup component
	Vue.component('modal',{
		props:['userinfo'],
		template:`
		<div>
		<div class= "modal-overlay" v-on:click = "$emit('close')"></div>
		<div class="col-md-6 col-md-offset-2 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-1 popup">
				<div class="row">
				<div class="col-md-8 col-sm-8 col-xs-8">
					<img :src = "'assets/img/avatar_users/' + userinfo.avar_user + '.png'" class="thumb-user">
					<input class = "set-question" placeholder="What do you want to ask?"></input>
				</div>
				<div class="col-md-3 col-sm-3 col-xs-3">
					<select class="select">
						<option>Topics</option>
						<option>English</option>
						<option>Technology</option>
						<option>Startup</option>
					</select>
				</div>
				<div class="col-md-1 col-sm-1 col-xs-1">
					<div class="icon-close pull-right" v-on:click = "$emit('close')">x</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<hr style="clear: both;">
					<textarea placeholder="Your content..."></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<button class="button pull-right">Add question</button>
				</div>
			</div>
		</div>
	</div>
		`
	});
new Vue({
	el: '#js-home-section-3',
	data:{
		showModal: false,
		user:{
			avar_user:"avatar17",
			url_profile:"Malala"
		},
		posts:{
			
			tab_top: [
				{title: "How are you?", url: "185928", avar_ask:"avatar11", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar12", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar13", num_answer: 5, url_profile:"UN_Women", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar14", url_profile:"UNHumanRights", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Về $$state trong angularjs", url: "185928", avar_ask:"avatar15", url_profile:"hrw", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			],
			tab_english: [
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar6", url_profile:"EmmaWatson", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar7", url_profile:"HarryPotterFilm", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar8", num_answer: 5, url_profile:"pottermore", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar9", url_profile:"UNICEF", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "Làm sao để học React tốt?", url: "185928", avar_ask:"avatar10", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			],
			tab_technology: [
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar1", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar1", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar2", url_profile:"UN_Women", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar3", num_answer: 5, url_profile:"hrw", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar4", url_profile:"jk_rowling", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
				{title: "How is the name “Gandalf” pronounced?", url: "185928", avar_ask:"avatar5", url_profile:"EmmaWatson", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"avatar16", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
			]
		},
		currentTab: 'Top',
			tabs: ['Top','English','Technology']
	},
	computed: {
		currentTabComponent: function () {
		  return 'tab_' + this.currentTab.toLowerCase();
		},
	},
	
});


