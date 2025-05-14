import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const page = () => {
  const tagArr = ["React", "Next.js", "TypeScript"];

  return (
    <section className="border rounded-xl min-h-full p-8">
      <div className="mb-10">
        <h3 className="font-bold text-4xl mb-1 text-gray-800 dark:text-gray-100">
          Lorem ipsum dolor sit amet
        </h3>
        <div>
          <span className="text-sm font-bold mr-3 text-gray-800 dark:text-gray-100">
            grxxn
          </span>
          <span className="text-sm font-bold mr-3 text-gray-800 dark:text-gray-100">
            •
          </span>
          <span className="text-sm text-gray-500">2025.05.14</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 mt-4">
            {tagArr.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-green-600 bg-green-50 border border-green-600 rounded-full px-2 py-1"
              >
                # {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 border rounded-full flex justify-center items-center hover:border-green-600">
              <IoShareSocial />
            </button>
            <button className="w-8 h-8 border rounded-full flex justify-center items-center hover:border-green-600">
              <FaRegHeart />
            </button>
          </div>
        </div>
        <div className="border-b mt-5"></div>
      </div>
      <article className="prose prose-lg dark:prose-invert leading-relaxed text-gray-800 dark:text-gray-100 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
          imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
          Egestas integer eget aliquet nibh praesent. In hac habitasse platea
          dictumst quisque sagittis purus. Pulvinar elementum integer enim neque
          volutpat ac.
        </p>
        <p>
          Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
          ullamcorper malesuada proin. Neque convallis a cras semper auctor.
          Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor
          id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus
          integer feugiat scelerisque. Feugiat in fermentum posuere urna nec
          tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu
          augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
          risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl
          suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim
          convallis aenean et tortor at. Pretium viverra suspendisse potenti
          nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus
          ultrices. Elementum nibh tellus molestie nunc. Et magnis dis
          parturient montes nascetur. Est placerat in egestas erat imperdiet.
          Consequat interdum varius sit amet mattis vulputate enim.
        </p>
        <p>
          Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum
          odio eu. Etiam erat velit scelerisque in dictum non consectetur a
          erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor
          posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas.
          Bibendum neque egestas congue quisque egestas diam. Laoreet id donec
          ultrices tincidunt arcu non sodales neque. Eget felis eget nunc
          lobortis mattis aliquam faucibus purus. Faucibus interdum posuere
          lorem ipsum dolor sit.
        </p>
        <p>
          Et netus et malesuada fames ac. Erat pellentesque adipiscing commodo
          elit at imperdiet dui accumsan. Sodales neque sodales ut etiam sit
          amet nisl purus in. Maecenas volutpat blandit aliquam etiam. Sit amet
          luctus venenatis lectus magna fringilla urna porttitor rhoncus.
          Egestas purus viverra accumsan in nisl. Semper feugiat nibh sed
          pulvinar proin. Duis convallis convallis tellus id interdum velit
          laoreet. Ante in nibh mauris cursus mattis molestie. Ut etiam sit amet
          nisl purus in mollis nunc. Feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Tellus at urna condimentum mattis
          pellentesque id nibh tortor id. Tristique magna sit amet purus gravida
          quis blandit turpis cursus. Dolor sit amet consectetur adipiscing.
          Consequat ac felis donec et odio pellentesque diam volutpat. Nunc sed
          augue lacus viverra vitae congue. Mauris in aliquam sem fringilla ut
          morbi tincidunt augue.
        </p>
        <p>
          Elementum eu facilisis sed odio morbi quis commodo odio. Mauris
          rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit
          amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam
          maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis
          posuere. Nibh venenatis cras sed felis eget velit aliquet. Elementum
          nisi quis eleifend quam adipiscing. Amet cursus sit amet dictum sit
          amet justo donec enim. Odio pellentesque diam volutpat commodo sed
          egestas egestas fringilla. Habitant morbi tristique senectus et netus
          et malesuada. Imperdiet dui accumsan sit amet nulla facilisi morbi
          tempus iaculis. Ac turpis egestas maecenas pharetra.
        </p>
      </article>
    </section>
  );
};

export default page;
