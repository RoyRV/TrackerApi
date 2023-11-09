import { User } from "../entities/user.model";
import firestore from "../../infrastructure/db/firebase.connection";

export default class UserRepository {
  private readonly COLLECTION_NAME = "users";

  constructor() {}

  public async getAll() {
    var querySnapshot = await firestore.collection(this.COLLECTION_NAME).get();
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const user: User = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        startDate: userData.startDate.toDate() // Assuming startDate is a Firestore Timestamp
      };
      console.log("user", user)
    });
    return [];
  }

  public create(user: User) {
    firestore.collection(this.COLLECTION_NAME).add(user);
  }
}
