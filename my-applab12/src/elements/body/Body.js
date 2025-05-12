

function Body() {
  return (
    <div>
      <p>
        Привет, Мир!
      </p>

      <div id="container">
     <form id="container1_4">
         <input 
		    type="button"
            value="Задания 1-4"
            class="elements"
            onclick="Task_1_4()"
			/>
			
			<label for="text1">Переменная varl</label>
			<input	
				type="text"
				id="text1"
				class="elements"
			/>

			<label for="text2">Переменная var2</label>
			<input	
				type="text"
				id="text2"
				class="elements"
			/>

			<label for="text3">Переменная var3</label>
			<input	
				type="text"
				id="text3"
				class="elements"
			/>
			
			<label for="text4">Переменная var4</label>
			<input	
				type="text"
				id="text4"
				class="elements"
			/>
		</form>	

		<form id="container5">
         <input 
		    type="button"
            value="Задания 5"
            class="elements"
            onclick="Task_5()"
			/>
			
			<label for="textA">A=</label>
			<input	
				type="text"
				id="textA"
				class="elements"
			/>
			
			<label for="textB">B=</label>
			<input	
				type="text"
				id="textB"
				class="elements"
			/>
			
			<label for="textC">C=</label>
			<input	
				type="text"
				id="textC"
				class="elements"
			/>
			
		</form>	
		
		<form id="container6">
         <input 
		    type="button"
            value="Задания 6"
            class="elements"
            onclick="Task_6()"
			/>
	
			<label for="radioFor">
			<input 
			type="radio"
            id="radioFor"
			name="loop"
			value="For"
			class="loop"
			checked
			/>			
			Вывод с помощью цикла FOR(ДЛЯ)</label>
			
			<label for="radioWhile">
			<input 
			type="radio"
            id="radioWhile"
			name="loop"
			value="While"
			class="loop"
			/>			
			Вывод с помощью цикла WHILE(ПОКА)</label>
			
			<label for="radioDoWhile">
			<input 
			type="radio"
            id="radioDoWhile"
			name="loop"
			value="DoWhile"
			class="loop"
			/>			
			Вывод с помощью цикла DO-WHILE(ПОКА)</label>
			
			<label for="textFor">Вывод с помощью цикла FOR(ДЛЯ)</label>
			<input	
				type="text"
				id="textFor"
				class="elements"
			/>
			
			<label for="textWhile">Вывод с помощью цикла WHILE(ПОКА)</label>
			<input	
				type="text"
				id="textWhile"
				class="elements"
			/>
			
			<label for="textDoWhile">Вывод с помощью цикла DO-WHILE(ПОКА)</label>
			<input	
				type="text"
				id="textDoWhile"
				class="elements"
			/>			
		</form>	

		<form id="container7">
         <input 
		    type="button"
            value="Задания 7"
            class="elements"
            onclick="Task_7()"
			/>	
			<select id="weather">
				<option>Солнечная</option>
				<option>Дождливая</option>
				<option>Пасмурная</option>
				<option>Град</option>
			</select>
		</form>	
   
  </div>

    </div>
  );
}

export default Body;
