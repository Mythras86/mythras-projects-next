import './page.scss';
import { Users } from '../api/users/user.model';
import { GET } from '../api/users/users.route';

export default async function Profil() {
  
  const data = await GET();
  const users = await data.json();

  return (
    <main id='formCont'>
      <h1>Profilok</h1>
      {users.map((user: Users) =>
        <section key={users.index}>
          <div className='bg-black border-green color-green'>Név</div>
          <div className='bg-black border-green color-green'>{user.name}</div>
        </section>
      )}
    </main>
  );
}