// @main def hello(): Unit =
//   println("Hello world!")
//   println(msg)

// def msg = "I was compiled by Scala 3. :)"

//^
// @main def main(): Unit = 
//   println("eeeeeee")
//   val word = "hello"
//   println(word + " eeee\neeeee")

//   var x = 1

//   println("x before = " + x)
//   println("x after = " + num(x))

// //* recursive function
// def num(xx:Int):Int =
//   var x = xx
//   if (x != 20) {
//     //* num(x+1)
//     // or
//     x+=1
//     num(x)

//   } else {
//     x
//   }

//^ list
@main def main(): Unit = {
  var mylist = 1::2::3::Nil
  var mylist2 = List(9, 8, 7, 6, 5)

  // println(mylist)
  // println(mylist2)

  // println(mylist2.slice(1, mylist2.length))

  println("#######################")
  println(tail(List(9, 8, 7, 6, 5)))

  println("#######################")
  println(tail(List("i", "love", "andaman", "of", "thailand")))
}

// & assignment 2: ให้เขียนฟังก์ชั่น tail, drop, dropWhile
def tail(mylist: Seq[?]): Any = {
  var ls = mylist

  ls.slice(1, ls.length)
}
