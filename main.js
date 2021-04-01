
// 初期値
let value =0 ;

document.addEventListener('click',function(event){

	let display = document.getElementById('display');
	// 初期の値が０の場合に空にして先頭に0が出ないようにする
	if(value == 0){
		display.innerHTML = "";
		// 値を追加して以降クリックしても空にするのを防ぐ
		value = 1;
	}

	if(event.target.matches('#eq')){
		let calcResult = eval(display.innerHTML);
		// 計算結果がなければ0の値を返す
		if(!calcResult){
			display.innerHTML = '0';
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

	let clickNumber = event.target.innerHTML;
	let berforeClickNumber = display.innerHTML;

	// .numberでないクラスをクリックしても反応しない
	if(!event.target.matches('.number')){
		return;
	}

	display.innerHTML = berforeClickNumber + clickNumber ;

})

