package com.example

//#user-registry-actor
import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors
import scala.collection.immutable

//#user-case-classes
// final case class User(name: String, age: Int, countryOfResidence: String)
final case class User(id: Int, day: String, colors: String, description: String)
final case class Users(days: immutable.Seq[User])

//#user-case-classes

object UserRegistry {
  // actor protocol
  sealed trait Command
  final case class GetUsers(replyTo: ActorRef[Users]) extends Command
  final case class CreateUser(user: User, replyTo: ActorRef[ActionPerformed]) extends Command
  // final case class GetUser(name: String, replyTo: ActorRef[GetUserResponse]) extends Command
  // final case class DeleteUser(name: String, replyTo: ActorRef[ActionPerformed]) extends Command
  final case class GetUser(id: Int, replyTo: ActorRef[GetUserResponse]) extends Command
  final case class DeleteUser(id: Int, replyTo: ActorRef[ActionPerformed]) extends Command
  final case class Update(id: Int, updated: User, replyTo: ActorRef[ActionPerformed]) extends Command




  final case class GetUserResponse(maybeUser: Option[User])
  final case class ActionPerformed(description: String)

  def apply(): Behavior[Command] = registry(Set.empty)

  private def registry(days: Set[User]): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetUsers(replyTo) =>
        replyTo ! Users(days.toSeq)
        Behaviors.same
      case CreateUser(user, replyTo) =>
        // replyTo ! ActionPerformed(s"User ${user.name} created.")
        replyTo ! ActionPerformed(s"data added successfully")
        registry(days + user)
      // case GetUser(name, replyTo) =>
      //   replyTo ! GetUserResponse(users.find(_.name == name))
      case GetUser(id, replyTo) =>
        replyTo ! GetUserResponse(days.find(_.id == id))
        Behaviors.same
      // case DeleteUser(name, replyTo) =>
      //   replyTo ! ActionPerformed(s"User $name deleted.")
      //   registry(users.filterNot(_.name == name))
      case DeleteUser(id, replyTo) =>
        replyTo ! ActionPerformed(s"data delete successfully")
        registry(days.filterNot(_.id == id))

      case Update(id, updated, replyTo) =>
        replyTo ! ActionPerformed(s"data update successfully")
        registry(days.map(user => if (user.id == id) updated else user))
    }
}
//#user-registry-actor


