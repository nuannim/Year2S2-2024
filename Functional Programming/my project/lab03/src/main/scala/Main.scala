// @main def hello(): Unit =
//   println("Hello world!")
//   println(msg)

// def msg = "I was compiled by Scala 3. :)"

// * 1
// @main def hello(): Unit =
//   println("Task 1")
//   Thread.sleep(1000) 
//   println("Task 2")

// * 2
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
// @main def hello(): Unit =
//   val task1 = Future {
//     Thread.sleep(1000)
//     println("Task 1 completed")
//   }
//   val task2 = Future {
//     Thread.sleep(1000)
//     println("Task 2 completed")
//   }
//   Thread.sleep(2000)

// * 3
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Failure, Success}


// def Print_one(): Unit =
//   println('A')
//   Future(println('B'))
//   println('C')
  
// def slowPrint(x: Any) =
//   var n = BigInt("1000000000")
//   while n > 0 do n -= 1
//   println(x)

// def Print_two(): Unit =
//   slowPrint('A')
//   Future(slowPrint('B'))
//   slowPrint('C')

// @main def hello(): Unit =
//   Print_one()
//   slowPrint(10)
//   Print_two()

// * 4
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits. global 

// val t = new Thread(() => {
//   while (true) {
//     println("Daemon running...")
//     Thread.sleep(500)
//   }
// })

// @main def hello(): Unit =

//   val task1 = Future { 
//     Thread.sleep(1000) 
//     println("Task 1 completed") 
//     } 
//   val task2 = Future { 
//     Thread.sleep(1000) 
//     println("Task 2 completed") 
//     }

//   t.setDaemon(true) // make t be Daemon Thread
//   t.start()
//   Thread.sleep(2000) // wait 2000 ms
//   println("Main thread exits")

// * 5
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Success, Failure}


// val t = new Thread(() => {
//   while (true) {
//     // println("Daemon running...")
//     Thread.sleep(500)
//   }
// })

// @main def hello(): Unit =
//   val future1 = Future {
//     Thread.sleep(1000)
//     println("Task 1 completed")
//     1
//   }
//   val future2 = Future {
//     Thread.sleep(1000)
//     println("Task 2 completed")
//     2
//   }
//   val result = for {
//     res1 <- future1
//     res2 <- future2
//   } yield res1 + res2

//   result.onComplete {
//   case Success(value) => println(s"Result: $value")
//   case Failure(ex)    => println(s"Failed: ${ex.getMessage}")
//   }

//   t.setDaemon(true) // make t be Daemon Thread
//   t.start()
//   Thread.sleep(2000) // wait 2000 ms
//   // println("Main thread exits")


// * 6
// def aShortRunningTask(): Int = 
//   Thread.sleep(500) 
//   42 

// val x = aShortRunningTask()

// def longRunningAlgorithm(): Int = 
//   Thread.sleep(10000) 
//   42

// // simulate a slow-running method
// def slowlyDouble(x: Int, delay: Long): Future[Int] = Future {
//   Thread.sleep(delay)
//   x * 2
// }

// val f = slowlyDouble(2, 5000)

// @main def hello(): Unit =
//   // println(x)
//   // println(longRunningAlgorithm())
//   Thread.sleep(5000)
//   println(f)

// * 7
import scala.concurrent.{Promise, Future}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Success, Failure}

// def calculate_f(input: Int): Future[Int] = Future {
//     // Simulate a short computation
//     Thread.sleep(1000)
//     input * input
//   }

// def calculate_fp(input: Int): Promise[Int] = {
//     val promise = Promise[Int]()
//     Future {
//       // Simulate a long computation
//       Thread.sleep(10000)
//       promise.success(input * input)
//     }
//     promise
//   }

// @main def hello(): Unit =
//   val f1 = calculate_f(42)
//   val p2 = calculate_fp(42)

//   f1.onComplete {
//     case Success(value) => println(s"calculate_f Success result: $value")
//     case Failure(ex)    => println(s"calculate_f failed: ${ex.getMessage}")
//   }

  
//   p2.future.onComplete {
//     case Success(value) => println(s"calculate_fp Success result: $value")
//     case Failure(ex)    => println(s"calculate_fp failed: ${ex.getMessage}")
//   }
// //wait for future complete
//   Thread.sleep(20000) 

// * 8
import scala.concurrent.{Future, ExecutionContext}
import scala.util.{Success, Failure}
import scala.concurrent.ExecutionContext.Implicits.global

// def delta(): Long = System.currentTimeMillis()

// def multipleFutures(): Future[Int] =
//   println(s"creating the futures:   ${delta()}")
  
//   val f1 = Future { Thread.sleep(800); 1 }
//   val f2 = Future { Thread.sleep(200); 2 }
//   val f3 = Future { Thread.sleep(400); 3 }

//   val result =
//     for
//       r1 <- f1
//       r2 <- f2
//       r3 <- f3
//     yield
//       println(s"in the 'yield': ${delta()}")
//       r1 + r2 + r3

//   result

// @main def hello(): Unit =
//   val result = multipleFutures()

//   result.onComplete {
//     case Success(x) =>
//       println(s"in the Success case: ${delta()}")
//       println(s"result = $x")
//     case Failure(e) =>
//       e.printStackTrace()
//   }
//   println(s"before the 'sleep(3000)': ${delta()}")
  
//   Thread.sleep(3000) // ทำให้ JVM ยังไม่ปิด

// * 9
import java.util.concurrent._

// class SafeBox_0[A]:
//   private var contents = Option.empty[A]
//   private val filled = CountDownLatch(1)

//   def get: A = synchronized {
//      filled.await()
//      contents.get
//   }

//   def set(value: A): Boolean = synchronized {
//      if contents.nonEmpty then false
//      else
//       contents = Some(value)
//       filled.countDown()
//       true
//   }


class SafeBox[A]:
   private var contents = Option.empty[A]
   private val filled = CountDownLatch(1)

   def get: A =
      filled.await()
      synchronized(contents.get)
    
   def set(value: A): Boolean =
    val setter = synchronized {
        if contents.nonEmpty then false
        else
          contents = Some(value)
          true
  }
    if setter then filled.countDown()
    setter
@main def hello(): Unit =
val exec = Executors.newCachedThreadPool()
val box_0 = SafeBox_0[Int]()
val box_1 = SafeBox_1[Int]()
val box = SafeBox[Int]()
//exec.execute(() => box.set(0))
//exec.execute(() => box_0.set(0))
println(box_0.get)
println(box_2.get)
println(box.get)



  