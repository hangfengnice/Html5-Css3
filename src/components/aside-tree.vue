<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
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
      nowPath: ""
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
          id: 2,
          label: "css3特性",
          path: "/css3"
        },
        {
          id: 3,
          label: "浏览器兼容性小谈",
          path: "/browser"
        },
        {
          id: 4,
          label: "相似属性的不同点",
          path: "/different"
        },
        {
          id: 5,
          label: "所遇问题尚未解决",
          path: "/problem"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>
