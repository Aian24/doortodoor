import cv2
import os
from PIL import Image

def extract_frames():
    video_path = "public/relaunch-hero.mp4"
    output_dir = "public/hero_frames"
    os.makedirs(output_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Could not open video", video_path)
        return
        
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    print(f"Video opened: {total_frames} frames, {fps} fps, {width}x{height}")
    
    frame_idx = 0
    saved_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        # Convert BGR (OpenCV) to RGB (PIL)
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(rgb_frame)
        
        filename = f"frame_{frame_idx:03d}.webp"
        out_path = os.path.join(output_dir, filename)
        
        # Save as optimized webp
        img.save(out_path, "WEBP", quality=82, method=4)
        saved_count += 1
        frame_idx += 1
        
        if frame_idx % 30 == 0 or frame_idx == total_frames:
            print(f"Extracted {frame_idx}/{total_frames} frames...")
            
    cap.release()
    print(f"Successfully extracted {saved_count} frames into {output_dir}")

if __name__ == "__main__":
    extract_frames()
