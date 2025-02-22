import scala.collection.parallel.immutable._
import scala.collection.parallel.mutable._

object Main extends App {
  //* ex01
  // val pa = ParArray.tabulate(1000)(x => 2 * x + 1)
  //  println(pa)

  // println(pa.map(x => (x - 1) / 2))


  // val pv = new ParVector[Int]

  // val pv = Vector(1,2,3,4,5,6,7,8,9).par
  // println(pv)


  // val pv2 = scala.collection.parallel.immutable.ParVector.tabulate(1000)(x => x)
  // println(pv2.filter(_%2 == 0))

  // val pr = (1 to 3).par
  // val pr = (15 to 5 by -2).par
  // println(pr)

  //* ex02
  // var sum = 0
  // // println(sum)

  // val list = (1 to 1000).toList.par
  // // println(list)

  // list.foreach(sum += _)
  // println(sum)



  // val list2 = (1 to 1000).toList.par

  // println(list2.reduce(_-_))


  val strings = List("abc","def","ghi","jk","lmnop","qrs","tuv","wx","yz").par
  // println(strings)


  val alphabet = strings.reduce(_+_)
    println(alphabet)

}
