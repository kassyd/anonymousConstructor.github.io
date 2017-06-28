<template>
  <Row class="wrap">
    <Col :span="24" class="wrap-main">
      <Col class="toolbar" :span="20" :push="2">
        <Form :inline="true" :model="filters" class="tl form" :label-width="50">
          <Form-item label="编号:">
            <Input v-model="filters.number" placeholder=""></Input>
          </Form-item>
          <Form-item label="姓名:">
            <Input v-model="filters.name" placeholder=""></Input>
          </Form-item>
          <Form-item label="报表日期:" :label-width="80">
            <Date-picker v-model="filters.date" type="date" placeholder="选择日期">
            </Date-picker>
          </Form-item>
          <Form-item label="机构名称:" :label-width="80">
            <Select v-model="filters.institution">
              <Option value="北京支行"></Option>
              <Option value="长沙支行"></Option>              
            </Select>
          </Form-item>
          <Form-item label="币种:">
            <Select v-model="filters.currency">
              <Option value="人名币"></Option>
              <Option value="美元"></Option>
              <Option value="欧元"></Option>
              <Option value="英镑"></Option>              
            </Select>
          </Form-item>
          <Form-item label="单位:">
            <Select v-model="filters.unit">
              <Option value="元"></Option>
              <Option value="万元"></Option>              
            </Select>
          </Form-item>
          <Form-item label="客户经理类型:" :label-width="100">
            <Checkbox-group v-model="filters.checkList">
              <Checkbox label="客户经理"></Checkbox>
              <Checkbox label="虚拟客户经理"></Checkbox>
              <Checkbox label="机构公共户"></Checkbox>            
            </Checkbox-group>
          </Form-item>
          <br>
          <Form-item>
            <Button type="primary" @click="search">查询</Button>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="reset">重置</Button>
          </Form-item>
        </Form>
      </Col>
    </Col>
  </Row>
</template>
<script>
export default {
  data () {
    return {
      filters: {
        number: '',
        name: '',
        date: '',
        institution: '',
        currency: '',
        checkList: [],
        unit: ''
      }
    }
  },
  methods: {
    search () {
      console.log('查询完毕')
    },
    reset () {
      let filters = this.filters
      for (let k in filters) {
        if (k === 'checkList') {
          filters[k] = []
        } else {
          filters[k] = ''
        }
      }
    }
  }
}
</script>
<style scoped>
  .tl {
    text-align: left;
  }
  .toolbar {
    margin-top: 40px;
  }
</style>

