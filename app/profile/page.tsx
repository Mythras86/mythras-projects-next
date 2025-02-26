import './page.scss';
import { IUser } from '../api/users/user.model';
import DeleteButton from './components/DeleteButton';
import { getAllUsers } from '../api/auth/[...nextauth]/actions';

export default async function Profil() {

  const users: Array<IUser> = await getAllUsers();

  return (
    <main id='formCont'>
      <h1>Profilok</h1>
      {users.map((user: IUser) =>
        <section key={user.id}>
          <div className='neonGreen text1'>Név</div>
          <div className='neonGreen text1'>{user.id}</div>
          <div className='neonGreen text1'>{user.name}</div>
          <div className='neonGreen text1'>{user.email}</div>
          <div className='neonGreen text1'>{user.pass}</div>
          <DeleteButton id={user.id} />
        </section>
      )}
    </main>
  );
}