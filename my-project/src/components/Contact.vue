<template>
    <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          @TODO 
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="text" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="text" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template> 

<!-- <template>
  <div class="home" style="margin-left: 20px;">
      <p>お名前</p>
      <input v-model="name" placeholder="Name">
      <p>メールアドレス</p>
      <input type="email" v-model="email" maxlength="30">
      <p>お問い合わせ内容</p>
      <input v-model="message" placeholder="message">
      <button @click="sendItem">送信する</button>
      <p v-if="showMessage" style="margin-top: 20px">
          フォームが正常に送信されました。
      </p>
  </div>
</template>
<script>
// Vue CLIで作成したアプリでは、@マークは./srcを指す
import firebase from '@/firebase/firestore'

export default {
  name: 'home',
  data() {
    return {
        name: '',
        email: '',
        message: '',
        items: [],
        showMessage: false,
    }
  },
  
  methods: {
   sendItem(){
     const colref = firebase.firestore().collection("formcontent"); // "formcontent"という名前のコレクションへの参照を作成
     
     // 保存用JSONデータを作成
     const saveData = {
        name: this.name,
        email: this.email,
        message: this.message
     };
     
     // addの引数に保存したいデータを渡す
     colref.add(saveData).then(function(docRef) {
          // 正常にデータ保存できた時の処理
          //console.log("Document written with ID: ", docRef.id);
      }).catch(function(error) {
          // エラー発生時の処理
          console.error("Error adding document: ", error);
      });

      this.showMessage = true;
   },
  }
}
</script> -->

