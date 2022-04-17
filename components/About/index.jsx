import Heading from "../commons/Heading";

export default function About() {
  return (
    <div className="w-10/12 mx-auto my-4">
      <Heading title="ABOUT ME" />
      <div className="mt-4 flex items-stretch justify-center">
        <div className="flex-1  text-xl text-dark-grey">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus voluptas aut doloremque, autem sunt vero cupiditate
            nesciunt voluptatem veritatis ex beatae quisquam, harum nostrum quis
            officia ad eos quidem provident amet consequuntur repellendus quo
            laborum? Quis nemo, modi adipisci officiis nihil labore quam nostrum
            eveniet voluptas quo a odit aperiam praesentium fuga, illum commodi
            id soluta.
          </p>
          <p>
            amet minus perspiciatis neque voluptatem, pariatur necessitatibus
            rerum? Illum sequi eaque rem ex ipsum voluptate hic nostrum
            perferendis soluta, maiores ut asperiores vitae a alias. Inventore
            delectus in exercitationem non minima distinctio asperiores! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quod
            autem odit cum? Fugiat obcaecati nesciunt error ex consequuntur
            commodi ipsum non dolorum nemo, eos sapiente minus rerum harum
            quaerat quia facilis qui quibusdam deleniti maxime consectetur
            cupiditate asperiores ullam.
          </p>
        </div>
        <div className="flex-1 ">
          <img src="/images/developer.png" alt="developer" className="w-4/5" />
        </div>
      </div>
    </div>
  );
}
