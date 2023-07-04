<template>
  <div class="flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4">
    <div class="h-full grid grid-rows-2 gap-4">
      <div class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh]">
        <!-- 0 -->
        <MoleculesBigCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <!-- 1 -->
      </div>

      <div class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh]">
        <MoleculesSmallCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <MoleculesBigCardSkeleton />
        <MoleculesSmallCardSkeleton />
        <MoleculesSmallCardSkeleton />
      </div>
    </div>
  </div>
</template>
