const proxy = require('http-proxy-middleware');
module.exports = function(app) {

  app.use(
    proxy(
      '/ajax',
      {
        target: 'https://m.dcdapp.com/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=1573738442&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=pull',
        changeOrigin: true
      }
  )
  ) 
  app.use(
    proxy(
      '/api',
      {
        target: 'https://m.dcdapp.com',
        changeOrigin: true,
        "pathRewrite":{
          "^/api":''
        }
      }
  )
  )
  app.use(
    proxy(
      '/jsd',
      {
        target: 'http://localhost:9000',
        changeOrigin: true,
      }
  )
  )
  
}
