// 初期値
let value = 0;
document.addEventListener('click',function(event){
	let display = document.getElementById('display');
	let clickNumber = event.target.innerHTML;
	let berforeClickNumber = display.innerHTML;

	// 初期の値が０の場合に空にして先頭に0が出ないようにする
	if(value == 0){
		berforeClickNumber = "";
		// 値を追加して以降クリックしても空にするのを防ぐ
		value = 1;
	}

	// 0or00を入力したときにdisplayが0or00なら初期値に戻す
	// つまり次に入力した数字の先頭に0or00はつかない
	if(event.target.matches('#zero')){
		if(berforeClickNumber == 0 || 00){
			value = 0;
		}
	}
	// 0の時に.を押した際に0.1になる
	if(berforeClickNumber == 0 || 00){
		if(event.target.matches('.dotto')){
			berforeClickNumber = 0.;
		}
	}

	if(event.target.matches('#eq')){
		let calcResult = eval(display.innerHTML);
		// 計算結果がなければ0の値を返す
		if(!calcResult){
			display.innerHTML = '0';
			value = 0;
			return;
		}else{
			display.innerHTML = calcResult;
			console.log(calcResult);
			return;
		}
	}

	if(event.target.matches('.clear')){
		display.innerHTML = '0';
		// クリアした際は値を初期値に戻す
		value = 0;
		return;
	}

	// .numberでないクラスをクリックしても反応しない
	if(!event.target.matches('.number,.ope,.dotto')){
		return;
	}

	display.innerHTML = berforeClickNumber + clickNumber ;

})