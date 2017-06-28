<template>
  <Row class="wrap">
    <Col :span="24" class="wrap-main">
      <Col :span="24" class="toolbar">
        <Form :inline="true" :model="filters" :label-width="60">
          <Form-item label="工号:">
            <Input v-model="filters.number" placeholder="请输入工号"></Input>
          </Form-item>
          <Form-item label="姓名:" class="ml">
            <Input v-model="filters.name" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item label="职位:" class="ml">
            <Select v-model="filters.position" placeholder="请选择职位">
              <Option value="支行行长"></Option>
              <Option value="客户经理"></Option>              
            </Select>
          </Form-item>
          <Button type="primary" @click="search">查询</Button>
          <Button type="primary" @click="add">新增</Button>
        </Form>
      </Col>    
      <Col :span="24" class="table">
        <Table :columns="tableHead" :data="tableData" border></Table>
      </Col>
    </Col>
    <Modal title="新增" v-model="addFormVisible">
      <Form ref="addForm" :model="addForm" :rules="ruleInline" :label-width="60">
        <Form-item label="工号:" prop="number">
          <Input v-model="addForm.number" placeholder="请输入工号"></Input>
        </Form-item>
        <Form-item label="姓名:" prop="name">
          <Input v-model="addForm.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="职位:" class="tl" prop="position">
          <Select v-model="addForm.position" placeholder="请选择职位">
            <Option value="支行行长"></Option>
            <Option value="客户经理"></Option>
          </Select>
        </Form-item>
      </Form>
      <div slot="footer" class="dialog-footer">
        <Button @click.native="addFormVisible = false">取消</Button>
        <Button type="primary" @click.native="submit('addForm')">提交</Button>
      </div>
    </Modal>
  </Row>
</template>

<script>
export default{
  data () {
    return {
      filters: {
        number: '',
        name: '',
        position: ''
      },
      addForm: {
        number: '',
        name: '',
        position: ''
      },
      ruleInline: {
        number: [
          { required: true, message: '请填写工号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择职位', trigger: 'blur' }
        ]
      },
      addFormVisible: false,
      tableHead: [
        {
          title: '工号',
          key: 'number',
          width: 240,
          fixed: 'left',
          sortable: true
        },
        {
          title: '姓名',
          key: 'name',
          width: 240
        },
        {
          title: '职位',
          key: 'position',
          width: 240
        },
        {
          title: '交易额',
          key: 'transactions',
          width: 240,
          sortable: true
        },
        {
          title: '审批状态',
          key: 'approvalState',
          width: 240
        },
        {
          title: '交易时间',
          key: 'transactionDate',
          width: 240
        }
      ],
      tableData: [{
        number: '1',
        name: '张三',
        position: '客户经理',
        transactions: 100,
        approvalState: '已审批',
        transactionDate: '17/05/23'
      }, {
        number: '2',
        name: '李四',
        position: '支行行长',
        transactions: 150,
        approvalState: '已审批',
        transactionDate: '17/05/24'
      }, {
        number: '3',
        name: '王五',
        position: '客户经理',
        transactions: 130,
        approvalState: '已审批',
        transactionDate: '17/05/20'
      }, {
        number: '4',
        name: '马六',
        position: '客户经理',
        transactions: 190,
        approvalState: '未审批',
        transactionDate: '17/06/12'
      }],
      tableDataCurrent: []
    }
  },
  mounted: function () {
    this.tableDataCurrent = this.tableData
  },
  methods: {
    add () {
      this.addFormVisible = true
    },
    search () {
      console.log(this.filters.number)
      let i = 0
      this.tableDataCurrent = []
      if (this.filters.number === '' && this.filters.name === '' && this.filters.position === '') {
        this.tableDataCurrent = this.tableData
      } else {
        for (i = 0; i <= this.tableData.length - 1; i++) {
          if (this.tableData[i].number === this.filters.number) {
            this.tableDataCurrent.push(this.tableData[i])
            continue
          }
          if (this.tableData[i].name === this.filters.name) {
            this.tableDataCurrent.push(this.tableData[i])
            continue
          }
          if (this.tableData[i].position === this.filters.position) {
            this.tableDataCurrent.push(this.tableData[i])
            continue
          }
        }
      }
      this.filters.number = ''
      this.filters.name = ''
      this.filters.position = ''
    },
    submit (name) {
      let para = {}
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('新增成功!')
          for (let k in this.addForm) {
            para[k] = this.addForm[k]
          }
          this.tableData.push(para)
          this.addForm = {}
          this.addFormVisible = false
        } else {
          this.$Message.error('请完成必填信息!')
        }
      })
    }
  }
}
</script>
<style scoped>
  .wrap {
    margin-top: 20px;
  }
  .tl {
      text-align: left;
  }
  .tc {
    text-align: center;
  }
  .ml {
      margin-left: 10px;
  }
  button {
    margin-left: 20px;
  }
</style>
