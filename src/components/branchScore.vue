<template>
  <Row>
    <Col :span="24" class="table">
      <Checkbox-group v-model="tableChecked" @on-change="tableCheckedChange">
        <Checkbox label="institution">机构</Checkbox>
        <Checkbox label="score">评分</Checkbox>
        <Checkbox label="yearProfit">年收益额</Checkbox>
        <Checkbox label="monthProfit">当月收益额</Checkbox>
        <Checkbox label="approvalState">审批状态</Checkbox>
        <Checkbox label="transactionDate">交易时间</Checkbox>
      </Checkbox-group>
      <Table id="table" :columns="tableHead" :data="tableData" :highlight-row="true"  border></Table>
      <div class="pageDivider">
        <Page show-sizer show-total show-elevator :total="12" @on-page-size-change="pageSizeChange" @on-change="pageNumberChange"></Page>
      </div>
    </Col>
  </Row>
</template>
<script>
export default {
  data () {
    return {
      pageNumber: 1,
      pageSize: 10,
      tableChecked: [
        'institution',
        'score',
        'yearProfit',
        'monthProfit',
        'approvalState',
        'transactionDate'
      ],
      tableHead: [],
      tableData: [{
        number: '1',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '2',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '3',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '4',
        institution: '广东机构',
        score: 9.4,
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      },
      {
        number: '5',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '6',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '7',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '8',
        institution: '广东机构',
        score: 9.4,
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      },
      {
        number: '9',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '10',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '11',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '12',
        institution: '广东机构',
        score: 9.4,
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      }],
      tableDataLocal: [{
        number: '1',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '2',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '3',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '4',
        institution: '广东机构',
        score: 9.4,
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      },
      {
        number: '5',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '6',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '7',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '8',
        institution: '广东机构',
        score: 9.4,
        yearProfit: 4000000,
        monthProfit: 190000,
        approvalState: '未审批',
        transactionDate: '17/06/12',
        music: 'a',
        _expanded: false
      },
      {
        number: '9',
        institution: '北京市机构',
        score: 9.8,
        yearProfit: 2000000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23',
        music: 'a',
        _expanded: false
      }, {
        number: '10',
        institution: '湖南机构',
        score: 9.5,
        yearProfit: 3000000,
        monthProfit: 150000,
        approvalState: '已审批',
        transactionDate: '17/05/24',
        music: 'a',
        _expanded: false
      }, {
        number: '11',
        institution: '上海市机构',
        score: 9.6,
        yearProfit: 1500000,
        monthProfit: 130000,
        approvalState: '已审批',
        transactionDate: '17/05/20',
        music: 'a',
        _expanded: false
      }, {
        number: '12',
        institution: '广东机构',
        score: 9.4,
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
    getTableColumns () {
      const tableList = {
        number: {
          i: 1,
          title: '机构号',
          key: 'number',
          width: 240,
          fixed: 'left',
          sortable: true
        },
        institution: {
          i: 2,
          title: '机构',
          key: 'institution',
          width: 240
        },
        score: {
          i: 3,
          title: '评分',
          key: 'score',
          width: 240
        },
        yearProfit: {
          i: 4,
          title: '年收益额',
          key: 'yearProfit',
          width: 240
        },
        monthProfit: {
          i: 5,
          title: '当月收益额',
          key: 'monthProfit',
          width: 240,
          sortable: true
        },
        approvalState: {
          i: 6,
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
        transactionDate: {
          i: 7,
          title: '交易时间',
          key: 'transactionDate',
          width: 240
        }
      }
      let para = [tableList.number]
      this.tableChecked.forEach(col => para.push(tableList[col]))
      para.sort(function (a, b) {
        return a.i - b.i
      })
      return para
    },
    tableCheckedChange () {
      this.tableHead = this.getTableColumns()
    },
    // select: function (event) {
    //   console.log(this)
    //   console.log(event)
    // }
    pageSizeChange (size) {
      console.log(size)
      this.pageSize = size
      let para = []
      for (let i = 0; i < this.pageSize; i++) {
        if (this.tableDataLocal[(this.pageNumber - 1) * this.pageSize + i]) {
          para[i] = this.tableDataLocal[(this.pageNumber - 1) * this.pageSize + i]
        } else break
      }
      this.tableData = para
      // this.tableDataLocal[pageNumber * size]
    },
    pageNumberChange (number) {
      this.pageNumber = number
      let para = []
      for (let i = 0; i < this.pageSize; i++) {
        if (this.tableDataLocal[(this.pageNumber - 1) * this.pageSize + i]) {
          para[i] = this.tableDataLocal[(this.pageNumber - 1) * this.pageSize + i]
        } else break
      }
      this.tableData = para
      console.log(this.pageNumber)
    }
  },
  mounted: function () {
    this.tableCheckedChange()
    this.pageSizeChange(this.pageSize)
  },
  updated: function () {
    var tds = this.$el.querySelectorAll('.ivu-table-tbody td:not(.ivu-table-hidden)')
    for (let i = 0; i < tds.length; i++) {
      tds[i].ondblclick = function (e) {
        let self = this
        let value = this.innerText
        let targetChild = this.firstChild.cloneNode(true)
        this.innerHTML = "<input type='text' value='" + value + "' id='_editable' style='width:100%;height:40px;box-sizing:border-box;background:transparent;font-size:13px;color:black;text-align:center;border:none;outline-color:black'>"
        var input = document.querySelector('#_editable')
        input.focus()
        var len = input.value.length
        if (document.selection) {
          var sel = input.createTextRange()
          sel.moveStart('character', len)
          sel.collapse()
          sel.select()
        } else if (typeof input.selectionStart === 'number' && typeof input.selectionEnd === 'number') {
          input.selectionStart = input.selectionEnd = len
        }
        var action = function () {
          if (value !== this.value && this.value !== '') {
            targetChild.firstElementChild.innerText = this.value
            self.replaceChild(targetChild, input)
          } else {
            targetChild.firstChild.innerHTML = value
            self.replaceChild(targetChild, input)
          }
          input.removeEventListener('blur', action, false)
        }
        input.addEventListener('blur', action, false)
      }
    }
  }
}
</script>
<style scoped>
  .pageDivider {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
</style>
