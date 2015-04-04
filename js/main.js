/**
 * Created by chenxijian on 15/4/4.
 */

var template_animation_change_controller = {

  target : null,

  templates : [],

  now_point : 0,

  initialize : function(pack){
    if(!pack.tar || !pack.templates) {
      return;
    }
    this.target = pack.tar;
    this.templates = pack.templates;

    console.log(pack);

    $(this.target).find(".template-change-cover").html(this.templates[this.now_point]);
  },

  next_ele : function(){

    this.now_point = (this.now_point + 1) % this.templates.length;

    var covered = $(this.target).find(".template-change-covered");
    var cover = $(this.target).find(".template-change-cover");

    covered.removeClass("animative");
    covered.css("top","100%");
    covered.html(this.templates[this.now_point]);
    covered.addClass("template-change-cover");
    covered.removeClass("template-change-covered");

    cover.addClass("template-change-covered");
    cover.removeClass("template-change-cover");

    setTimeout(function(){
      var c = covered;
      return function(){
        c.addClass("animative");
        c.css("top","0%");
      };
    }(),1);

  },

  pre_ele : function(){

    this.now_point = (this.now_point + this.templates.length - 1) % this.templates.length;

    var covered = $(this.target).find(".template-change-covered");
    var cover = $(this.target).find(".template-change-cover");

    covered.removeClass("animative");
    covered.css("top","-100%");
    covered.html(this.templates[this.now_point]);
    covered.addClass("template-change-cover");
    covered.removeClass("template-change-covered");

    cover.addClass("template-change-covered");
    cover.removeClass("template-change-cover");

    setTimeout(function(){
      var c = covered;
      return function(){
        c.addClass("animative");
        c.css("top","0%");
      };
    }(),1);

  }

};


$(document).ready(function(){
  //template_animation_change_controller.initialize({tar:".template-change-animation","templates" : [_.template($("#fir").html(),{"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg", "large_title" : "12345", "small_title" : "54321"})]});
  var t1 = _.template($("#fir").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "large_title" : "12345", "small_title" : "54321"});

  var t2 = _.template($("#thr").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "show_img" : "http://i1.brcdn.cn/d/wallpaper/2012/02/10/91644f86fd902389_src.jpg",
      "paragraph" : "哦我问问你访问技能放你打车uwemdqwkmdoqiwje的做法魔王日同价位热情"});

  var t3 = _.template($("#sec").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "show_img" : "http://i1.brcdn.cn/d/wallpaper/2012/02/10/91644f86fd902389_src.jpg",
      "paragraph" : "哦我问问你访问技能放你打车uwemdqwkmdoqiwje的做法魔王日同价位热情",
      "title" : "tttttttitle"
    });

  var t4 = _.template($("#for").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "show_img" : "http://i1.brcdn.cn/d/wallpaper/2012/02/10/91644f86fd902389_src.jpg",
      "paragraph" : "哦我问问你访问技能放你打车uwemdqwkmdoqiwje的做法魔王日同价位热情"});

  var t5 = _.template($("#fiv").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "show_img" : "http://i1.brcdn.cn/d/wallpaper/2012/02/10/91644f86fd902389_src.jpg",
      "paragraph" : "哦我问问你访问技能放你打车uwemdqwkmdoqiwje的做法魔王日同价位热情",
      "title" : "tttttttitle"
    });

  var t6 = _.template($("#six").html(),
    {"background_img" : "http://img5.duitang.com/uploads/item/201112/19/20111219083341_2P55n.thumb.700_0.jpg",
      "show_img" : "http://i1.brcdn.cn/d/wallpaper/2012/02/10/91644f86fd902389_src.jpg",
      "paragraph" : "哦我问问你访问技能放你打车uwemdqwkmdoqiwje的做法魔王日同价位热情"});

  //var t1 = "<button>111</button>";
  //var t2 = "<a>123</a>";
  template_animation_change_controller.initialize({tar : ".template-change-animation",templates : [t1,t2,t3,t4,t5,t6]});

});