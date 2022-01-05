using GraphQLBasicSetup.IService;
using GraphQLBasicSetup.Model;

namespace GraphQLBasicSetup.Service
{
    public class StudentService : IStudentService
    {
        public List<Student> GetStudents()
        {
            List<Student> students = new List<Student>();
            for (int i=1; i<=9; i++)
            {
                students.Add(new Student()
                {
                    StudentId = i,
                    Name = "STU" + i,
                    RollNo = "100"+i
                });
            }
            return students;
        }
    }
}
