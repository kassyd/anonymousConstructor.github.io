<template>
  <Row class="wrap">
    <Col :span="24" class="wrap-main">
      <Col class="toolbar" :span="20" :push="2">
        <Form :inline="true" :model="filters" class="tl form" :label-width="80">
          <Form-item label="机构名称:">
            <Select v-model="filters.institution">
              <Option value="北京支行" disabled></Option>
              <Option value="长沙支行"></Option>              
            </Select>
          </Form-item>
          <br>
          <Form-item label="报表日期:">
            <Date-picker v-model="filters.date" type="date" placeholder="选择日期" :options="disableDate">
            </Date-picker>
          </Form-item>
          <Form-item label="币种:">
            <Select v-model="filters.currency">
              <Option value="人名币"></Option>
              <Option value="美元"></Option>
              <Option value="欧元"></Option>
              <Option value="英镑"></Option>              
            </Select>
          </Form-item>
          <br>
          <Form-item label="机构级别:">
            <Checkbox-group v-model="filters.checkList">
              <Checkbox label="支行"></Checkbox>
              <Checkbox label="二级分行"></Checkbox>
              <Checkbox label="分行"></Checkbox>
              <Checkbox label="大中型客户团队"></Checkbox>
              <Checkbox label="小企业金融中心"></Checkbox>
              <Checkbox label="小企业专职团队"></Checkbox>              
            </Checkbox-group>
          </Form-item>
          <br>
          <Form-item label="单位:">
            <Select v-model="filters.unit">
              <Option value="元"></Option>
              <Option value="万元"></Option>              
            </Select>
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
        institution: '',
        date: '',
        currency: '',
        checkList: [],
        unit: ''
      },
      disableDate: {
        disabledDate (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
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

