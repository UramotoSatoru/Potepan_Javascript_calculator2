// 初期値
let value = '';
let mode = 'integer_mode';
	// 計算する前の状態					start
	// 数字を入力している最中		 calculation
	// ＋÷－×を押した直後  		calBtn

document.addEventListener('click',function(event){
	let display = document.getElementById('display');
	let clickNumber = event.target.innerHTML;
	let berforeClickNumber = display.innerHTML;


	// 初期の値が０の場合に空にして先頭に0が出ないようにする
	if(value === ""){
		berforeClickNumber = "";
		// 値を追加して以降クリックしても空にするのを防ぐ
		value = 'start';
	}
	if(event.target.matches(".number")){
		if(value === 'start' ||value === 'calBtn' ||value === 'calculation'){
			value = 'calculation';
			console.log(value);
		}
	}

	// 0or00を入力したときにdisplayが0or00なら初期値に戻す
	// つまり次に入力した数字の先頭に0or00はつかない
	if(event.target.matches('#zero')){
		if(berforeClickNumber == 0 || 00){
			value = "";
		}
	}
	// 小数点を複数入れられなくする
	if (event.target.matches('.dotto')){
		console.log(mode);
		if(mode == "decimal_mode"){
			console.log(mode);
			return;
		}else{
			console.log(mode);
			mode = "decimal_mode" ;
		}
	}

	// 0の時に.を押した際に0.1になる
	if(berforeClickNumber == 0 || 00){
		if(event.target.matches('.dotto')){
			mode = "decimal_mode" ;
			berforeClickNumber = 0.;
			}
	}

	if(event.target.matches('#eq')){
		let calcResult = eval(display.innerHTML);
		// 計算結果がなければ0の値を返す
		if(!calcResult){
			display.innerHTML = '0';
			value = "";
			return;
		}else{
			display.innerHTML = calcResult;
			value = "";
			mode = 'integer_mode';
			console.log(calcResult);
			return;
		}
	}

	if(event.target.matches('.clear')){
		display.innerHTML = '0';
		// クリアした際は値を初期値に戻す
		value = "";
		mode = 'integer_mode';
		return;
	}

	if(event.target.matches('.ope')){
		if(value == "start" ){
			value = "";
			return;
		}else if(value == "calBtn"){
			return;
		}
		value = "calBtn";
		mode = 'integer_mode'
	}


	// .numberでないクラスをクリックしても反応しない
	if(!event.target.matches('.number,.ope,.dotto')){
		return;
	}

	display.innerHTML = berforeClickNumber + clickNumber ;


})