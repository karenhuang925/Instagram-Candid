from app.models import db, Reply, environment, SCHEMA


def seed_replies():
  objects = [
    Reply(user_id = 1, comment_id = 1, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 2, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 3, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 4, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 5, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 6, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 7, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 8, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 9, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 10, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 11, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 12, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 14, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 15, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 16, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 17, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 18, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 19, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 20, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 21, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 22, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 23, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 24, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 25, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 26, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 27, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 28, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 29, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 30, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 31, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 32, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 33, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 34, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 35, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 36, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 37, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 38, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 39, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 40, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 41, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 42, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 43, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 44, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 45, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 46, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 47, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 48, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 49, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 50, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 51, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 52, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 53, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 54, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 55, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 56, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 57, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 58, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 59, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 60, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 61, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 62, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 63, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 64, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 65, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 66, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 67, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 68, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 69, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 70, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 71, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 72, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 73, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 74, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 75, reply = "reply 1"),
    Reply(user_id = 1, comment_id = 76, reply = "reply 1"),
    Reply(user_id = 2, comment_id = 77, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 78, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 79, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 80, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 81, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 82, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 83, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 84, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 85, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 86, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 87, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 88, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 89, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 90, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 91, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 92, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 93, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 94, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 95, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 96, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 97, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 98, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 99, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 100, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 101, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 102, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 103, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 104, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 105, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 106, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 107, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 108, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 109, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 110, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 111, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 112, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 114, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 115, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 116, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 117, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 118, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 119, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 120, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 121, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 122, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 123, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 124, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 125, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 126, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 127, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 128, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 129, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 130, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 131, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 132, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 133, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 134, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 135, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 136, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 137, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 138, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 139, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 140, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 141, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 142, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 143, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 144, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 145, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 146, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 147, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 148, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 149, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 150, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 151, reply = "reply 2"),
    Reply(user_id = 2, comment_id = 152, reply = "reply 2"),
    Reply(user_id = 3, comment_id = 153, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 154, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 155, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 156, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 157, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 158, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 159, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 160, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 161, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 162, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 163, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 164, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 165, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 166, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 167, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 168, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 169, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 170, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 171, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 172, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 173, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 174, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 175, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 176, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 177, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 178, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 179, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 180, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 181, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 182, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 183, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 184, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 185, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 186, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 187, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 188, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 189, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 190, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 191, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 192, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 193, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 194, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 195, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 196, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 197, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 198, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 199, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 200, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 201, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 202, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 203, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 204, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 205, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 206, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 207, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 208, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 209, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 210, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 211, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 212, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 214, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 215, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 216, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 217, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 218, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 219, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 220, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 221, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 222, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 223, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 224, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 225, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 226, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 227, reply = "reply 3"),
    Reply(user_id = 3, comment_id = 228, reply = "reply 3"),
    Reply(user_id = 4, comment_id = 229, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 230, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 231, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 232, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 233, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 234, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 235, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 236, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 237, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 238, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 239, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 240, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 241, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 242, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 243, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 244, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 245, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 246, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 247, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 248, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 249, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 250, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 251, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 252, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 253, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 254, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 255, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 256, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 257, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 258, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 259, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 260, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 261, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 262, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 263, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 264, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 265, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 266, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 267, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 268, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 269, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 270, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 271, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 272, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 273, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 274, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 275, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 276, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 277, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 278, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 279, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 280, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 281, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 282, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 283, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 284, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 285, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 286, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 287, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 288, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 289, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 290, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 291, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 292, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 293, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 294, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 295, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 296, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 297, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 298, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 299, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 300, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 301, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 302, reply = "reply 4"),
    Reply(user_id = 4, comment_id = 303, reply = "reply 4"),
    Reply(user_id = 5, comment_id = 304, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 305, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 306, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 307, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 308, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 309, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 310, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 311, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 312, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 314, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 315, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 316, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 317, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 318, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 319, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 320, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 321, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 322, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 323, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 324, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 325, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 326, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 327, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 328, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 329, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 330, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 331, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 332, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 333, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 334, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 335, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 336, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 337, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 338, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 339, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 340, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 341, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 342, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 343, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 344, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 345, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 346, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 347, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 348, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 349, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 350, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 351, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 352, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 353, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 354, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 355, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 356, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 357, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 358, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 359, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 360, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 361, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 362, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 363, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 364, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 365, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 366, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 367, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 368, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 369, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 370, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 371, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 372, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 373, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 374, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 375, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 376, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 377, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 378, reply = "reply 5"),
    Reply(user_id = 5, comment_id = 379, reply = "reply 5")
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_replies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.replies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM replies")

    db.session.commit()
