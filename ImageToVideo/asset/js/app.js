// 请从开者中心获取 "Client-end (Target Recognition) URL"，格式如：https://af0c1ca3b41857bd8d6b44d480601c74.cn1.crs.easyar.com:8443/search
const app = new App('https://5cf6a23ba865eb2e4d0b0736ba0b2d3b.cn1.crs.easyar.com:8443');
// 如果使用自定义方法获取token
app.setToken({
    'crsAppId': 'fbee9f1876f26d4f11ca03589bf26c3a', // 云别库的CRS AppId
    'token': 'vIGp528D4nYB5oKmdG4F68OcA5rDbMJ9WJh1kOihEOyl/rBSKyQsjAcBvedRMtq+PIUG4I95o+ZLf3VbGGo5csG6V+9HYu0zxPtwONN3ZpEKHDPkfKTKKA5Jtti6ojcfP02O0sVDZpw+7Awt1d8cLWIidVvDmvtbdEYmA16hSpXxM7zwe2EZ0ktfH2vPD/zeqw1AARjU+rmxJAreAX9ZBfvtjuXTEQb/7oyz07Ns8XksQAJLPwzguJqRRnkmut8Bj9MqkzuoatN8ZntyXlGZi19Z9Kr1fhyhpCfgwzZebeQJ2xEKZp5GQjSEfgEHBloo3SluaisJ0MK5uDVr9wmACcMG4YDBUzArY98IJQi7cLhywOdrQinrXxmfyt+P8tZDkIp/DIbOYTp0VHqeJKu/e2/iskLKm/WTzP6tjBKnjcorA24M5ZH8rPQ83EI3ooQ+l+rYTgBKHtTwOD81B7phWQ==' // APIKey+APISecret生成token
});
// 如果使用EasyAR提供的集成环境
app.useEasyAr();
// 识别成功后的回调
app.callback = (msg) => {
    console.info(msg);
    const setting = {
        video: '//staticfile-cdn.sightp.com/sightp/webar/webardemo-final.mp4',
    };
    // 可以将 setting 作为meta上传到EasyAR的云识别，使用方法如下:
    // const setting = JSON.parse(window.atob(msg.target.meta));
    playVideo(setting);
};
// 在手机上可能不会自动播放
function playVideo(setting) {
    let video = document.querySelector('#easyARVideo');
    if (video === null) {
        video = document.createElement('video');
        video.setAttribute('id', 'easyARVideo');
        video.setAttribute('controls', 'controls');
        video.setAttribute('playsinline', 'playsinline');
        video.setAttribute('preload', 'preload');
        video.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:99');
        document.querySelector('#easyAR').appendChild(video);
    }
    video.setAttribute('src', setting.video);
    video.play().then(() => {
    }).catch((err) => {
        // 需要使用点击事件播放。
        console.info('播放视频失败');
        console.info(err);
    });
}
//# sourceMappingURL=app.js.map