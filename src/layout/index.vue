<template>
  <div>
    <el-container>
      <el-header>
        <div class="logo">我的vue3学习</div>

        
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-menu-item :index="route.path" v-for="route in routes">{{
            route.meta.title
          }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="activeIndexVer"
            class="el-menu-vertical-demo"
            mode="vertical"
            router
            :collapse="isCollapse"
          >
            <el-menu-item :index="route.path" v-for="route in routesChildren">
              <el-icon><setting /></el-icon>
              <template #title>{{ route.meta.title }}</template>
            </el-menu-item>
          </el-menu>
         
        </el-aside>
        <el-container>
          <el-main>
            <div class="iscoll"  @click="setColl">
              <el-icon><grid /></el-icon>
            </div>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      isCollapse: true,
      setColl: () => {
        data.isCollapse = !data.isCollapse;
      },
    });
    const thisRoute = useRoute();
    const thisRouter = useRouter();
    data.activeIndex = computed(() => {
      return `/${thisRoute.fullPath.split("/")[1]}`;
    });
    data.routes = computed(() => {
      return thisRouter.options.routes.filter((v) => !v.hiddent);
    });
    data.routesChildren = computed(() => {
      const route = thisRouter.options.routes.find(
        (v) => v.path == data.activeIndex
      );
      console.log(route.children)
      return route.children;
    });
    data.activeIndexVer = computed(() => {
      return thisRoute.fullPath;
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped>
.el-header {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0;
}
.el-main {
  background: #f2f2f2;
}
.el-container {
  height: calc(100vh - 60px);
}
.logo {
  width: 200px;
  min-width: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}
.el-menu.el-menu-demo {
  width: 100%;
  border: none;
}
.el-menu-item.is-active {
  background: #f2f2f2;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: none;
}
.el-aside{
width:auto;
min-width: 60px;
--el-aside-width:auto;
}
.el-menu-tooltip__trigger{
  padding-right:40px!important;
}
.el-main{
  position: relative;
}
.iscoll{
  position:absolute;
  left:10px;
  top:10px;
  width:30px;
  height: 30px;
  background:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>