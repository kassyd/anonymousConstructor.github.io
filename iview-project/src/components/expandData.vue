<template>
  <Row class="expandData">
    <Col>
      <table>
        <template v-for="item in tableData">
          <tr>
            <td>{{item.number}}</td>
            <td>{{item.institution}}</td>
            <td>{{item.yearProfit}}</td>
            <td>{{item.monthProfit}}</td>
            <td>{{item.approvalState}}</td>
            <td>{{item.transactionDate}}</td>
          </tr>
        </template>
      </table>
    </Col>
  </Row>
</template>
<script>
export default {
  props: {
    row: Object
  },
  data () {
    return {
      tableData: [{
        number: '1-1',
        institution: '长沙支行',
        yearProfit: 1300000,
        monthProfit: 100000,
        approvalState: '已审批',
        transactionDate: '17/05/23'
      }, {
        number: '1-2',
        institution: '湘潭支行',
        yearProfit: 700000,
        monthProfit: 80000,
        approvalState: '未审批',
        transactionDate: '17/05/24'
      }]
    }
  }
}
</script>
<style scoped>
  table{
    width:100%;
    text-align:center;
    border-collapse:collapse;
    border-spacing:1;
    border-spacing:0; 
    background-color: #f8f8f9;
  }
  table td{
    width: 240px;
    padding: 0 18px;
    word-break: break-all;
    word-wrap:break-word;
    border-right:1px solid #e9eaec; 
    border-bottom:1px solid #e9eaec;
    background-color: #f8f8f9;    
  }
</style>

