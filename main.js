var a = [6, 9, 15, -2, 92, 11];
		var sum = 0;
		var average = 0;
		//最大值
		console.log("o)最大值="+Math.max.apply(Math,a));
		//最小值
		console.log("o)最小值="+Math.min.apply(Math,a));
		
		//元素个数
		console.log("o)元素个数="+a.length);
		
		//平均值
		for(var i = 0; i　<　a.length; i++){
			sum += a[i];
			average = sum / a.length;
		}
		average=average.toFixed(2)
		console.log("o)平均值="+average);
