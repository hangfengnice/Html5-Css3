<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      node-key="id"
      :props="defaultProps"
      :filter-node-method="filterNode"
      ref="tree"
      setCurrentNode="setCurrentNode"
      :highlight-current="true"
      @node-click="getCurrentKey"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "aside-tree",
  data() {
    return {
      nowPath: "",
      currentDom: null
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getCurrentKey(data) {
      if (!data.path) {
        return 
      }
      if (this.nowPath !== data.path) {
        this.nowPath = data.path;
        this.$router.push({ path: this.nowPath });
      }
    }
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "主页",
          path: "/"
        },
        {
          id: 100,
          label: "HTML",
          children: [
            {
              id: 101,
              label: "html content",
              path: "/101-html"
            }
          ]
        },
        {
          id: 200,
          label: "CSS",
          children: [
            {
              id: 201,
              label: "link 与 @import 以及 @import url() 的异同",
              path: "/201-link-import"
            },
            {
              id: 202,
              label: "transiton",
              path: "/202-transition"
            },
            {
              id: 203,
              label: "animation",
              path: "/203-animation"
            },
          ]
        },
        {
          id: 300,
          label: "ES 5",
          children: [{
            id: 301,
            label: "",
            path: "/"
          },{
            id: 302,
            label: "",
            path: "/"
          }]
        },
        {
          id: 400,
          label: "ES 6",
          children: [{
            id: 401,
            label: "",
            path: "/vuex"
          },{
            id: 402,
            label: "vue-router",
            path: "/vue-router"
          }]
        },
        {
          id: 500,
          label: "DOM",
          children: [{
            id: 501,
            label: "",
            path: "/vuex"
          },{
            id: 502,
            label: "vue-router",
            path: "/vue-router"
          }]
        },
        {
          id: 600,
          label: "BOM",
          children: [{
            id: 601,
            label: "各大主流浏览器及其内核",
            path: "/601-browsers"
          },{
            id: 602,
            label: "vue-router",
            path: "/vue-router"
          }]
        },
        {
          id: 700,
          label: "Vue",
          children: [{
            id: 701,
            label: "vuex",
            path: "/701-vuex"
          },{
            id: 702,
            label: "vue-router",
            path: "/702-vue-router"
          }]
        },
        {
          id: 800,
          label: "小不同 大不同",
          children: [{
            id: 801,
            label: "vuex",
            path: "/vuex"
          },{
            id: 802,
            label: "vue-router",
            path: "/vue-router"
          }]
        },  
        {
          id: 900,
          label: "遇到的难点",
          children: [
            { 
            id: 901,
            label: "css问题",
              children: [
                {
                  id: 90101,
                  label: "flex下的sticky",
                  path: "/90101-problem"
                }
              ]
            },
            // {
            // id: 902,
            // label: "js问题",
            // path: "/vue-router"
            // }
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>
