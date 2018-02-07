let n
init()
setInterval(()=>{
  makeLeave(getImage(n)).one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  })
  makeCurrent(getImage(n+1))
  n+=1

},2000)

function getNumber(n){
  if(n > 3){
    n = n%3
    if(n === 0){
      n = 3
    }
  }
  return n
}

function init(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node){
   $node.removeClass('leave enter').addClass('current')
   return $node
}
function makeLeave($node){
   $node.removeClass('current enter').addClass('leave')
   return $node
}
function makeEnter($node){
   $node.removeClass('current leave').addClass('enter')
   return $node
}
function getImage(n){
  return $(`.images>img:nth-child(${getNumber(n)})`)
}