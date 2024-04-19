new Valine({
    el: '#vcomments' ,
    appId: 'kn3BDjau4t9OdEoozxOuDEoK-MdYXbMMI',
    appKey: 'KJDZrLfjnr98M5YhPTnnCzQQ'
});

// Use import
import Valine from 'valine';
// or Use require
const Valine = require('valine');

new Valine({
    el:'#vcomments',
    //other config
    appId: 'kn3BDjau4t9OdEoozxOuDEoK-MdYXbMMI', // 你的AppId  
    appKey: 'KJDZrLfjnr98M5YhPTnnCzQQ', // 你的AppKey  
    notify: false, // 邮件通知，默认为false  
    verify: false, // 验证码功能，默认为false  
    avatar: 'mm', // 头像设置，默认'mm'，使用leancloud的默认头像；设置为'cdn'则使用Gravatar头像  
    placeholder: '说点什么吧...', // 输入框占位符  
    visitor: true, // 游客评论，默认为true  
    pageSize: 10, // 分页大小，默认为10  
    lang: 'zh-cn' // 语言设置，默认为'zh-cn'  
    // 其他更多配置...  
})