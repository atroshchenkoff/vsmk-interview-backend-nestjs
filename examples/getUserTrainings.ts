// POST trainings/getUserTrainings

export const getUserTrainings = async (event) => {
  const { count, userId } = event.body;
  // @ts-ignore
  const trainingList = await prisma.training.findMany({
    where: {
      userId: userId,
    },
    take: count,
  });
  return trainingList
};
