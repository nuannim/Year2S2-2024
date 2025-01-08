// @main def hello(): Unit =
//   println("Hello world!")
//   println(msg)

// def msg = "I was compiled by Scala 3. :)"

//^ ///////////////////////////////////////////////////////////////////////
//^ /////////////////////////// by chatgpt ////////////////////////////////
//^ ///////////////////////////////////////////////////////////////////////

//* successor by chat
object LambdaCalculus {
  // Define the successor function in Scala
  def successor(n: Int): Int = n + 1

  def main(args: Array[String]): Unit = {
    val number = 5
    println(s"The successor of $number is ${successor(number)}")
  }
}

object LambdaCalculus {
  // Define the predecessor function in Scala
  def predecessor(n: Int): Int = if (n > 0) n - 1 else 0

  def main(args: Array[String]): Unit = {
    val number = 5
    println(s"The predecessor of $number is ${predecessor(number)}")
  }
}

object LambdaCalculus {
  // Define the addition function in Scala
  def addition(m: Int, n: Int): Int = m + n

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The addition of $num1 and $num2 is ${addition(num1, num2)}")
  }
}

object LambdaCalculus {
  // Define the subtraction function in Scala
  def subtraction(m: Int, n: Int): Int = m - n

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The subtraction of $num1 and $num2 is ${subtraction(num1, num2)}")
  }
}

object LambdaCalculus {
  // Define the multiplication function in Scala
  def multiplication(m: Int, n: Int): Int = m * n

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The multiplication of $num1 and $num2 is ${multiplication(num1, num2)}")
  }
}

object LambdaCalculus {
  // Define the AND function in Scala
  def and(x: Boolean, y: Boolean): Boolean = x && y

  def main(args: Array[String]): Unit = {
    val bool1 = true
    val bool2 = false
    println(s"The AND of $bool1 and $bool2 is ${and(bool1, bool2)}")
  }
}

object LambdaCalculus {
  // Define the OR function in Scala
  def or(x: Boolean, y: Boolean): Boolean = x || y

  def main(args: Array[String]): Unit = {
    val bool1 = true
    val bool2 = false
    println(s"The OR of $bool1 and $bool2 is ${or(bool1, bool2)}")
  }
}

object LambdaCalculus {
  // Define the equality function in Scala
  def equality(m: Int, n: Int): Boolean = m == n

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 5
    println(s"The equality of $num1 and $num2 is ${equality(num1, num2)}")
  }
}

//^ ///////////////////////////////////////////////////////////////////////
//^ ////////////////////// by chatgpt new version /////////////////////////
//^ ///////////////////////////////////////////////////////////////////////

object LambdaCalculus {
  // Define the addition function in Scala
  def addition(m: Int, n: Int): Int = {
    if (n == 0) m
    else addition(successor(m), predecessor(n))
  }

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The addition of $num1 and $num2 is ${addition(num1, num2)}")
  }
}

object LambdaCalculus {
  // Define the subtraction function in Scala
  def subtraction(m: Int, n: Int): Int = {
    if (n == 0) m
    else subtraction(predecessor(m), predecessor(n))
  }

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The subtraction of $num1 and $num2 is ${subtraction(num1, num2)}")
  }
}

object LambdaCalculus {
  // Define the multiplication function in Scala
  def multiplication(m: Int, n: Int): Int = {
    if (n == 0) 0
    else addition(m, multiplication(m, predecessor(n)))
  }

  def main(args: Array[String]): Unit = {
    val num1 = 5
    val num2 = 3
    println(s"The multiplication of $num1 and $num2 is ${multiplication(num1, num2)}")
  }
}


// object LambdaCalculus {
//   // Define the TRUE and FALSE functions in Scala
//   def TRUE(x: Any)(y: Any): Any = x
//   def FALSE(x: Any)(y: Any): Any = y

//   // Define the AND function in Scala
//   def AND(x: (Any => Any => Any))(y: (Any => Any => Any)): Any => Any => Any = x(y)(FALSE)

//   def main(args: Array[String]): Unit = {
//     println(s"AND(TRUE, TRUE): ${AND(TRUE)(TRUE)("This is true")("This is false")}")
//     println(s"AND(TRUE, FALSE): ${AND(TRUE)(FALSE)("This is true")("This is false")}")
//     println(s"AND(FALSE, TRUE): ${AND(FALSE)(TRUE)("This is true")("This is false")}")
//     println(s"AND(FALSE, FALSE): ${AND(FALSE)(FALSE)("This is true")("This is false")}")
//   }
// }

def and(x: Boolean, y: Boolean): Boolean = {
  if (x) y else false
}

def or(x: Boolean, y: Boolean): Boolean = {
  if (x) true else y
}


def IsEven(x: Int): Boolean = x % 2 == 0

// การใช้งาน
println(IsEven(4))  // true เพราะ 4 เป็นเลขคู่
println(IsEven(7))  // false เพราะ 7 ไม่เป็นเลขคู่



def IsOdd(x: Int): Boolean = !IsEven(x)

// การใช้งาน
println(IsOdd(4))  // false เพราะ 4 เป็นเลขคู่
println(IsOdd(7))  // true เพราะ 7 เป็นเลขคี่




//^ ///////////////////////////////////////////////////////////////////////

  def successor(n: Int): Int = n + 1

  def main(args: Array[String]): Unit = {
    val number = 5
    println(s"The successor of $number is ${successor(number)}")
  }



def addition(m: Int, n: Int): Int = {
  if (n == 0) m
  else addition(successor(m), predecessor(n))
}

def main(args: Array[String]): Unit = {
  val num1 = 5
  val num2 = 3
  println(s"The addition of $num1 and $num2 is ${addition(num1, num2)}")
}