## 📁 Date 내장 객체 공부

### 지금 이 순간 Date 정보 가져오기
- **Date.now()** 메소드를 사용하면 이 메소드가 호출된 시점의 타임스탬프가 반환된다. 
-> 새로운 Date객체를 만들 필요가 없어서 코드가 간결해짐
- new Date() 로 현재시간 정보를 담은 Date 객체 생성 가능.
> let myDate = new Date();  
> console.log(myDate === Date.now()); // true    
<br />
<br />

### Javascript는 월을 0부터 센다.
0 -> Jan
1 -> Feb
...
11 -> Dec

<br />
<br />

### Date 객체에는 잘못된 날짜를 자동으로 수정해주는 기능이 있다.
> let myBirth = new Date(1997, 3, 41);  
> console.log(myBirth) // Mon May 12 1997 00:00:00 GMT+0900 (대한민국 표준시)  
  
<br />
<br />

### Date 객체 정보 수정하기
set으로 시작하는 메소드들 사용하면 수정할 수 있다.
- setFullYear(year, [month], [date])
> myBirth.setFullYear(2021);
<br/>
 
- setMonth(month, [date])
- setDate(date)
- setHours(hour, [min], [sec], [ms])
- setMinutes(min, [sec], [ms])    
<br/>
<br/>

### 간단하게 시간정보 알아내기
toLocale~ 사용하면 사용자 컴퓨터에 설정된 국가에 맞게 날짜정보가 나타난다.
<br/>

>myBirth.toLocaleDateString() //"1997. 5. 12."      
>  
>myBirth.toLocaleString()  //"1997. 5. 12. 오전 12:00:00"  

>myBirth.toLocaleTimeString() //"오전 12:00:00"  


### Date 객체의 형변환
>console.log(typeof myDate); // object
>console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
**>console.log(Number(myDate)); // 1495033200000**
>console.log(Boolean(myDate)); // true
<br/>
Number로 형변환 한 값은 .getTime()메소드로 얻은 타임스탬프 값과 같다.

- 즉 Date 객체끼리는 사칙연산이 가능.
<br/>

> let today = new Date(2021, 10, 24);
> let tomorrow = new Date(2021, 10, 25);  
> timeDiff = tomorrow - today;  
> console.log(timeDiff); // 86400000 (ms)  
> console.log(timeDiff / 1000) // 86400 (sec)  
> console.log(timeDiff / 60) // 1440 (min)  
> console.log(timeDiff / 60 / 60 ) // 24 (hour)  
> console.log(timeDiff / 60 / 60 / 24) // 1 (day)  


### Date와 Day 구분하기!
- myDate.getDate(); -> 날짜 정보를 가져오는 것  
- myDate.getDay(); -> 요일 정보를 가져오는 것
