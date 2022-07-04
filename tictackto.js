var x=document.querySelector("#s1");
var user1=0;
var user2=0;
tarDiv=true;
var state=[1,0,1,0,1,0,0,1,0];
winnerDiv=document.querySelector("#winner");
document.querySelector('.container').addEventListener('click',function(e){
if(e.target.id)
setVal(e.target);
})
    function setVal(dataDiv)
    {
        id=dataDiv.id;
        if(tarDiv)
        {
            if(state[id]==1||state[id]==0)
            {
                dataDiv.innerHTML="X";
                state[id]='X';
                tarDiv=!tarDiv;
                checkWinner(tarDiv);
                console.log(tarDiv);
            }
        }
        else
        {
            if(state[id]==1||state[id]==0)
            {
                dataDiv.innerHTML="O";
                state[id]='O';
                tarDiv=!tarDiv; 
                checkWinner(tarDiv);
                console.log(tarDiv);
            }
        }
    }
    function showGame()
    {
        if(x.style.display=="block")
        {
           x.style.display="none"; 
        }
        else
        {
            x.style.display="block";
        }
    }
    function checkWinner(tryOut)
    {
        let problem=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let x=0;x<problem.length;x++)
        {
            let [a,b,c]=problem[x];
            if(state[a]==state[b]&&state[b]==state[c])
            {
              winnerDiv.innerHTML=tryOut?"Winner O<button type=button class=btn-close data-bs-dismiss=alert></button>":"winner X <button type=button class=btn-close data-bs-dismiss=alert></button>";
              gameDisable();
              checkCount(tryOut);
              showWinner( problem[x]);
              break;
            }
        }
    }
     function gameDisable()
    {
            for(let i=0;i<state.length;i++)
            {
                if(state[i]==1||state[i]==0)
                {
                    state[i]=null;
                }
            }
    }
    function checkCount(tryOut)
    {
        if(tryOut)
        {
            user1++;
            document.querySelector(".user2").innerHTML=user1;
        }
        else
        {
            user2++;
        document.querySelector(".user1").innerHTML=user2;
        }
    }
    function clrData()
    {
      var star=confirm("are you shoure you want to clear Game");
      if(star)
      { 
        tarDiv=true;
        state=[1,0,1,0,1,0,0,1,0]
        var dataContainer=document.querySelectorAll(".container DIV")
        for(let i=0;i<dataContainer.length;i++)
        {
            dataContainer[i].innerHTML="";
            dataContainer[i].style.backgroundColor="#d3d3d3";
            winnerDiv.innerHTML="";
        }
      }
        
    }
    function showWinner(pVal)
    {
        for(let i=0;i<pVal.length;i++)
        {
            document.getElementById(pVal[i]).style.backgroundColor="pink";
        }
    }  var x=document.querySelector("#s1");
    var user1=0;
    var user2=0;
    tarDiv=true;
    var state=[1,0,1,0,1,0,0,1,0];
    winnerDiv=document.querySelector("#winner");
  document.querySelector('.container').addEventListener('click',function(e){
    if(e.target.id)
    setVal(e.target);
  })
        function setVal(dataDiv)
        {
            id=dataDiv.id;
            if(tarDiv)
            {
                if(state[id]==1||state[id]==0)
                {
                    dataDiv.innerHTML="X";
                    state[id]='X';
                    tarDiv=!tarDiv;
                    checkWinner(tarDiv);
                    console.log(tarDiv);
                }
            }
            else
            {
                if(state[id]==1||state[id]==0)
                {
                    dataDiv.innerHTML="O";
                    state[id]='O';
                    tarDiv=!tarDiv; 
                    checkWinner(tarDiv);
                    console.log(tarDiv);
                }
            }
        }
        function showGame()
        {
            if(x.style.display=="block")
            {
               x.style.display="none"; 
            }
            else
            {
                x.style.display="block";
            }
        }
        function checkWinner(tryOut)
        {
            let problem=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]

            for(let x=0;x<problem.length;x++)
            {
                let [a,b,c]=problem[x];
                if(state[a]==state[b]&&state[b]==state[c])
                {
                  winnerDiv.innerHTML=tryOut?"Winner O<button type=button class=btn-close data-bs-dismiss=alert></button>":"winner X <button type=button class=btn-close data-bs-dismiss=alert></button>";
                  gameDisable();
                  checkCount(tryOut);
                  showWinner( problem[x]);
                  break;
                }
            }
        }
         function gameDisable()
        {
                for(let i=0;i<state.length;i++)
                {
                    if(state[i]==1||state[i]==0)
                    {
                        state[i]=null;
                    }
                }
        }
        function checkCount(tryOut)
        {
            if(tryOut)
            {
                user1++;
                document.querySelector(".user2").innerHTML=user1;
            }
            else
            {
                user2++;
            document.querySelector(".user1").innerHTML=user2;
            }
        }
        function clrData()
        {
          var star=confirm("are you shoure you want to clear Game");
          if(star)
          { 
            tarDiv=true;
            state=[1,0,1,0,1,0,0,1,0]
            var dataContainer=document.querySelectorAll(".container DIV")
            for(let i=0;i<dataContainer.length;i++)
            {
                dataContainer[i].innerHTML="";
                dataContainer[i].style.backgroundColor="#d3d3d3";
                winnerDiv.innerHTML="";
            }
          }
            
        }
        function showWinner(pVal)
        {
            for(let i=0;i<pVal.length;i++)
            {
                document.getElementById(pVal[i]).style.backgroundColor="pink";
            }
        }  var x=document.querySelector("#s1");
        var user1=0;
        var user2=0;
        tarDiv=true;
        var state=[1,0,1,0,1,0,0,1,0];
        winnerDiv=document.querySelector("#winner");
      document.querySelector('.container').addEventListener('click',function(e){
        if(e.target.id)
        setVal(e.target);
      })
            function setVal(dataDiv)
            {
                id=dataDiv.id;
                if(tarDiv)
                {
                    if(state[id]==1||state[id]==0)
                    {
                        dataDiv.innerHTML="X";
                        state[id]='X';
                        tarDiv=!tarDiv;
                        checkWinner(tarDiv);
                        console.log(tarDiv);
                    }
                }
                else
                {
                    if(state[id]==1||state[id]==0)
                    {
                        dataDiv.innerHTML="O";
                        state[id]='O';
                        tarDiv=!tarDiv; 
                        checkWinner(tarDiv);
                        console.log(tarDiv);
                    }
                }
            }
            function showGame()
            {
                if(x.style.display=="block")
                {
                   x.style.display="none"; 
                }
                else
                {
                    x.style.display="block";
                }
            }
            function checkWinner(tryOut)
            {
                let problem=[
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                ]

                for(let x=0;x<problem.length;x++)
                {
                    let [a,b,c]=problem[x];
                    if(state[a]==state[b]&&state[b]==state[c])
                    {
                      winnerDiv.innerHTML=tryOut?"Winner O<button type=button class=btn-close data-bs-dismiss=alert></button>":"winner X <button type=button class=btn-close data-bs-dismiss=alert></button>";
                      gameDisable();
                      checkCount(tryOut);
                      showWinner( problem[x]);
                      break;
                    }
                }
            }
             function gameDisable()
            {
                    for(let i=0;i<state.length;i++)
                    {
                        if(state[i]==1||state[i]==0)
                        {
                            state[i]=null;
                        }
                    }
            }
            function checkCount(tryOut)
            {
                if(tryOut)
                {
                    user1++;
                    document.querySelector(".user2").innerHTML=user1;
                }
                else
                {
                    user2++;
                document.querySelector(".user1").innerHTML=user2;
                }
            }
            function clrData()
            {
              var star=confirm("are you shoure you want to clear Game");
              if(star)
              { 
                tarDiv=true;
                state=[1,0,1,0,1,0,0,1,0]
                var dataContainer=document.querySelectorAll(".container DIV")
                for(let i=0;i<dataContainer.length;i++)
                {
                    dataContainer[i].innerHTML="";
                    dataContainer[i].style.backgroundColor="#d3d3d3";
                    winnerDiv.innerHTML="";
                }
              }
                
            }
            function showWinner(pVal)
            {
                for(let i=0;i<pVal.length;i++)
                {
                    document.getElementById(pVal[i]).style.backgroundColor="pink";
                }
            }