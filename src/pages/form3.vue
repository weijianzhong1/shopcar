<template>
    <div class="container" id="app">
            <h2 class="page-header">购物车</h2>
            <table class="table" style="border:1px solid #ccc;width:70%;margin:0 auto;height:260px;">
                <tr>
                    <th><label><input type="checkbox" @click="check_all" :checked="check_goods.length == cart_list.length"/>全选</label></th>
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>数量</th>
                    <th>每个价格</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(cart,index) in cart_list" :key="index">
                    <td><input type="checkbox" :value="cart" v-model="check_goods" /></td>
                    <td>{{cart.goods_name}}</td>
                    <td >{{cart.goods_price}}</td>
                    <td class="col-xs-3">
                        <span class="btn btn-default" v-on:click="reduce(cart)">-</span>
                        <input class="btn-group" type="text" v-model="cart.num" style="width:40px;height:20px;border:1px solid #ccc;"/>
                        <span class="btn btn-default" v-on:click="add_num(cart)">+</span>
                    </td>
                    <td>
                        <p>{{cart.goods_price*cart.num}}</p>
                    </td>

                    <td>
                        
                        <button class="btn btn-danger" v-on:click="delete_num">删除</button>
                        
                    </td>
                </tr>
            </table>
            <div>
                总计：共 {{cart_list.length}}件商品，已选择 {{total_num}} 件
                <div class="pull-right">
                    合计：{{total_price}}元
                    <a href="" class="btn btn-success" :disabled="check_goods.length <= 0">去结算</a>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            cart_list: [
                {
            　　goods_name: '苹果',
            　　goods_price: '996',
            　　num: '2',
            },
            {
            goods_name: '华为',
            goods_price: '886',
            num: '1',
            },
            {
            goods_name: '三星',
            goods_price: '226',
            num: '1',
            }
            ],
            check_goods: [] 
            }
        },
        　　computed: {

                total_price() {
                    let price = 0　　　　　　　　　　　　　　　　　　　　　　　
                    this.check_goods.forEach(item => {
                        price += Number(item.goods_price) * Number(item.num)
                        console.log(price)
                    })
                    return price
                },

                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(item.num);
                    })
                    return t_num
                },
                
            },
            methods:{

                reduce(cart) {
                    if(cart.num <=0) {
                        cart.num = 0
                    } else {
                        cart.num --
                    }
                },

                add_num(cart) {
                    cart.num++
                },

                delete_num(cart){
                    this.check_goods.splice(this.check_goods.indexOf(cart),1)
                    this.cart_list.splice(this.cart_list.indexOf(cart),1)
                },

                check_all() {
                    if (this.check_goods.length >0) {
                        this.check_goods = []
                    } else {
                        this.cart_list.forEach(item => {
                            this.check_goods.push(item)
                        })
                    }
                },
                
            }
}
</script>

