export default {
  // 此处编写的就是 Vue组件实例的 配置项，通过一定的语法，可以直接混入到组件内部
  // data methods computed 生命周期函数等
  // 注意点：
  // 1. 如果此处 和组件内，提供了同名的data 或 methods ，则组件内优先级更高
  // 2. 如果编写了生命周期函数，则mixina中的生命周期函数 和 页面的生命周期函数，会用数组管理统一执行
  methods: {
    loginConfirm () {
      // 判断 token 是否存在
    // token不存在，弹确认框
    // token存在，继续请求操作
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // 如果希望，跳转到登录===》 登录后能回跳回来，需要在跳转时携带参数（当前的路径地址） this.$route.fullPath()---->会包含查询参数
            // 将push 改为 replace  好处：不会额外新增很多历史，而是直接覆盖
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}
