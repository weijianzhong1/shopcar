<template>
    <div>
        <section class="con_section">
            <div class="setion-box">            
                <header style="">收款项目明细</header>
                <el-row  :gutter="24" class="box_title" style="width:918px;height:30px;line-height:30px;margin:0;background: #cbe2fb;">
                    <el-col :span="5"><div class="data_list">收费项目</div></el-col>
                    <el-col :span="3"><div class="data_list">备注说明</div></el-col>
                    <el-col :span="3"><div class="data_list">单价</div></el-col>
                    <el-col :span="3"><div class="data_list">单位</div></el-col>
                    <el-col :span="3"><div class="data_list"> 数量</div></el-col>
                    <el-col :span="4"><div class="data_list">金额</div></el-col>
                    <el-col :span="3"><div class="data_list">每年递增</div></el-col>
                </el-row>
                <el-row :gutter="24" class="box_section2" style="margin:0;position:relative;" v-for="(item,index) in form">
                    <el-col :span="5" style="border-top:none;" class="type_1 b_right">
                        <div class="data_list">{{item.name}}</div>
                    </el-col>
                    <el-col :span="3" style="border-top:none;" class="type_1 b_right">
                        <input type="text" class="Input" v-on:input="remark(index)" v-model="item.remark">
                    </el-col>
                    <el-col :span="3" class="type_1 b_right" style="border-top:none;">
                        <span class="red"></span>
                        <input type="text" class="Input" v-on:input="price(index)" v-model="item.price">
                    </el-col>
                    <el-col :span="3" class="type_1 b_right" style="border-top:none; text-align:center;">
                        <div class="data_list">{{item.unit}}</div>
                    </el-col>
                    <el-col :span="3" class="type_1 b_right" style="border-top:none;">
                        <span class="red"></span>
                        <input type="text" class="Input" v-on:input="number(index)" v-model="item.num">
                    </el-col>
                    <el-col :span="4"  style="border-lefe:none;border-top:none;" class="type_1 b_right">
                        <span class="red"></span>
                        <p style="padding-left:8px;box-sizing: border-box;">{{item.price*item.num}}</p>
                    </el-col>
                    <el-col :span="3"  style="border-lefe:none;border-top:none;" class="type_1">
                        <span class="red"></span>
                        <input type="text" class="Input"  v-on:input="incrunit(index)" v-model="item.incrunit">
                    </el-col>
                    <span class="x" v-on:click="delete_num(item)">x</span>
                </el-row>
                <template>
                    <el-button class="add_btn">添加收款明细项</el-button>
                </template>
            </div>
        </section>
        <button v-on:click= form3()>点我2</button>

    </div>
</template>
<script>
export default {
    data () {
        
        return {

            form: [
				{
					'id': '4047',			
					'name': '物业费',
					'unit': '元/月·平方',
					'price': '5.0',
					'incr': '0.0',
					'incrunit': '1',
					'remark': '111',
					'money': '790.0',
					'num': '158.0'
                },
                {
					'id': '4048',			
					'name': '租金',
					'unit': '元/月·平方',
					'price': '28.0',
					'incr': '1.0',
					'incrunit': '2',
					'remark': '112',
					'money': '4424.0',
					'num': '158.0'
                },
                {
					'id': '4049',			
					'name': '分摊水电费',
					'unit': '元/月·平方',
					'price': '0.3',
					'incr': '0.0',
					'incrunit': '1',
					'remark': '113',
					'money': '47.4',
					'num': '158.0'
				},
            ]
        }
    },
    methods:{
        remark: function(index) {
            if(this.remark[index]<0){
                this.remark[index].num = 0;
            }else{
                this.remark[index].num = num;
            }
        },
        money: function(index) {
            if(this.money[index]<0){
                this.money[index].num = 0;
            }else{
                this.money[index].num = num;
            }
        },
        number: function(index) {
            if(this.number[index]<0){
                this.number[index].num = 0;
            }else{
                this.number[index].num = num;
            }
        },
        incrunit: function(index) {
            if(this.number[index]<0){
                this.number[index].num = 0;
            }else{
                this.number[index].num = num;
            }
        },
        del () {
            var span = document.querySelector("span")
            console.log(span)
        },
        form2:function(){
            this.$router.push({path:'/form2'})
        },
        form3:function(){
            this.$router.push({path:'/form3'})
        },
        delete_num(item){
            
            this.form.splice(this.form.indexOf(item),1)
            
        },
    
    }
    
}
</script>

<style lang="less" scoped>
    *{margin: 0 ;padding: 0;}

    .con_section{
        width: 992px;
        height: 287px;
        margin: 0 auto;
        background: #e0f0ff;
        .setion-box{
            width: 100%;
            height:100%;
            padding: 13px 13px 25px 28px;
            box-sizing: border-box;
            header{
                width:106px;
                height:24px;
                text-align:left;
                color:#202cb5;
                font-weight:600;
            }
            .box_section2{
                background: #fff;
                width:918px;
                height:46px;
                line-height:46px;
                .type_1{
                    height:100%;
                    border:1px solid #ccc;
                    box-sizing: border-box;
                    text-align:left;
                }
                .b_left{
                    border-left: none;
                }
                .b_right{
                    border-right: none;
                }
                .b_top{
                    border-top: none;
                }
                .Input{
                    width:96%;
                    height:76%;
                    border-radius:5px;
                    outline:none;
                    border:none;
                    border:1px solid #ccc;
                    text-indent:1em;
                }
                .x{
                    position:absolute;
                    right:-16px;
                    top:0px;
                    font-size:20px;
                    font-weight:700;
                    color:#202cb5;
                }
            }
            // color: #e0f0ff cbe2fb ececec b21f2a zi 202cb5 7776b3 737372;
        }
            .red{
                content: "";
                width:2px;
                height:72%;
                top:6px;
                display: block;
                background: red;
                position: absolute;
            }
            .add_btn{
                width:160px;
                height:40px;
                margin-top:16px;
                float:left;
                border-radius:5px;
            }
    }
    
    
</style>
