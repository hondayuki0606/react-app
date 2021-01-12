//import React from 'react';
import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  input = '';

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doCheck = this.doCheck.bind(this);
  }

   doCheck(event) {
     alert(event.target.value +
      "は長すぎます。(最大10文字)");
   }

   render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      {/* maxlengthは、最大文字数を示す属性です。そしてonCheckが、エラー時に実行する処理を設定する属性です。
      ここでは、doCheckというメソッドを実行するようにしてあります。
      こんな具合にonClickやonSubmitなどと同じ感覚で、オリジナルのイベント属性onCheckを使うことができるのがわかります。 */}
      <Message maxlength="10" onCheck={this.doCheck} />
    </div>;
  }
}

class Message extends Component {
  inputStyle = {
    fontSize:"12pt",
    padding:"5px"
  }
  // onChangeにdoChangeメソッドを設定してあります。また、constructorメソッドでも
  // doChangewコンポーネントで使えるように設定してありますね。
  constructor(props){
    super(props);
    this.doChange = this.doCheck.bind(this);
    // このdoChangega、このMessageコンポーネントのポインタといっても
    // onChangeで値が変更されるとdoChangeが実行されるようになっています。
    // そしてこのdoChangeで値のチェックを行っています。
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value = 
      e.target.value.substr(0,this.props.maxlength);
    }
  }
  // e.target.value.lengthとthis.props.maxlengthを比べていますね。
  // e.target.value.lengthはコンポーネントに入力されたテキストの文字列、this.props.maxlengthはコンポーネントのmaxlength属性に入力された文字列の値になります。
  // これらを比較し、入力された文字列がmaxlengthより大きくなったら、this.props.onCheck(e)を実行しています。
  // これで、onCkick属性に設定されたメソッドが実行される、というわけです。

  // この「独自イベントの作成」は、実際にやってみると結構難しいです。そもそも
  // どうやって独自イベントを発生させればいいかがわかるまでわからないかもしれません。
  // とりあえず、ここでやった「onChangeで、入力値をチェックして、問題があったら
  // this.props.onCheckを実行する」というやり方をよく理解しておきましょう。
  // そして、自分でコンポーネントを作って、同じように組み込んでみるとよいでしょう。
  // そうすると、「イベントの属性を追加するというのがどういう作業なのか」がなんとなく
  // 分かってくると思います。


  // では、MessageコンポーネントでonCheckがどのように組み込まれているのかを確認しましょう
  // このMessageコンポーネントでは、<input type="text">タグを作って表示しています。
  // renderメソッドを見るとこのようになっています。
  render(){
    return <input type="text" style={this.inputStyle}
    onChange ={this.doChange}/>
  }

}

export default App;