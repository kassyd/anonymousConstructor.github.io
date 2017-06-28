<template>
  <Row>
    <Col :span="24" class="table">
      <Table :columns="tableHead" :data="tableData" @on-row-click="toggle" border></Table>
    </Col>
  </Row>
</template>
<script>
import expandData from './expandData.vue'
export default {
  components: {
    expandData
  },
  data () {
    return {
      tableHead: [
        {
          type: 'expand',
          render: (h, params) => {
            return h(expandData, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: '机构号',
          key: 'number',
          width: 240,
          fixed: 'left',
          sortable: true
        },
        {
          title: '机构',
          key: 'institution',
          width: 240
        },
        {
          title: '年收益额',
          key: 'yearProfit',
          width: 240
        },
        {
          title: '当月收益额',
          key: 'monthProfit',
          width: 240,
          sortable: true
        },
        {
          title: '审批状态',
          key: 'approvalState',
          width: 240,
          filters: [
            {
              label: '未审批',
              value: 1
            },
            {
              label: '已审批',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.approvalState === '未审批'
            } else if (value === 2) {
              return row.approvalState === '已审批'
            }
          }
        },
        {
          title: '交易时间',
          key: 'transactionDate',
          width: 240
        }
      ],
      tableData: [{
        number: '1',
        institution: '北京市机构',
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '2',
        institution: '湖南机构',
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '3',
        institution: '上海市机构',
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '4',
        institution: '广东机构',
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      }]
    }
  },
  methods: {
    toggle (key) {
      console.log(key)
      for (let i = 0; i <= this.tableData.length - 1; i++) {
        if (this.tableData[i].number === key.number) {
          this.tableData[i]._expanded = !this.tableData[i]._expanded
        }
      }
    }
  }
}
</script>
<style scoped>
  .ivu-table-expanded-cell {
    padding: 0;
  }
</style>

