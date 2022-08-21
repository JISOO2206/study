<template>
  <div class="inputBox">
    <input class="todoInput" type="text" @keyup.enter="addTodo" v-model="newTodo">
    <div class="addContainer">
      <button class="addBtn" @click="addTodo">
        <i class="fa-solid fa-plus fa-lg"></i>
      </button>
    </div>
    <div>
      <PageModal v-if="showModal">
        <h3 slot="header">경고!</h3>
        <h3 slot="body">내용을 입력하세요</h3>
        <span class="subInfo" slot="footer">
          내용을 입력하지 않으면 추가할 수 없습니다.
          <div>
            <button class="closeModalBtn" @click="closeModal">확인</button>
          </div>
        </span>
      </PageModal>
    </div>
  </div>
</template>

<script>
import PageModal from '@/components/common/PageModal.vue';

export default {
  data(){
    return {
      newTodo : '',
      showModal : false
    }
  },
  methods : {
    addTodo(){
      if(this.newTodo !== ''){
        this.$emit('addTodo', this.newTodo);
        this.clearInput();
      }else{
        this.closeModal();
      }
    },
    clearInput(){
      this.newTodo = '';
    },
    closeModal(){
      this.showModal = !this.showModal;
    }
  },
  components: {
    "PageModal" : PageModal
  }
}
</script>
<style scoped>




  .todoInput:focus{
    outline: none;
  }
  .todoInput{
    border-style: none;
    font-size: 0.9rem;
  }
  .inputBox{
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    width: 400px;
  }
  .addContainer{
    float: right;
    background-color: lightblue;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: black;
    font-weight: 400;
    padding: auto;
    vertical-align: middle;
    background: none;
    border: none;
  }
  .addBtn:hover{
    cursor: pointer;
  }

  .subInfo{
    font-size: 12px;
    color: red;
  }

  .closeModalBtn{
    border: none;
    padding: 5px 10px;
    font-weight: 500;
  }
</style>