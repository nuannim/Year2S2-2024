def succ(x: Int): Int = {
  x + 1
}

def pred(x: Int): Int = {
  x - 1
}

def plus(x: Int, y: Int): Int = {
  // x * (succ(y))
  if (y == 0) x
  else plus(succ(x), pred(y))
}

def minus(x: Int, y: Int): Int = {
  if (y == 0) x
  else minus(pred(x), pred(y))
}

// def mult(m: Int, n: Int): Int = {
//   if (n == 0) n
//   else mult(pred(m), plus(n))
// }

def and(x: Any, y: Any): Any = {
  if (x) y
  else false
}

def or(x:Any, y: Any): Any = {
  if (x) true
  else y
}

def not(x:Any): Any = {
  if (x) false
  else true
}



@main def main(): Unit =
  // println(succ(2))
  println("plus: " + plus(10, 3))
  println("minus: " + minus(9, 4))
  println("mult: " + mult(2, 3))

  println("not true:" + not(true))
